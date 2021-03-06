/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */

import { Vector2 } from '../math/Vector2.js';
import { Vector3 } from '../math/Vector3.js';
import { Matrix4 } from '../math/Matrix4.js';
import { Triangle } from '../math/Triangle.js';
import { Object3D } from '../core/Object3D.js';
import { BufferGeometry } from '../core/BufferGeometry.js';
import { InterleavedBuffer } from '../core/InterleavedBuffer.js';
import { InterleavedBufferAttribute } from '../core/InterleavedBufferAttribute.js';
import { SpriteMaterial } from '../materials/SpriteMaterial.js';
import { Material } from '../materials/Material.js';

var geometry;

/**
 * @description 精灵对象，用来展示特效精灵是一个总是面朝着摄像机的平面，通常含有使用一个半透明的纹理。
 * 精灵不会投射任何阴影，即使设置了castShadow = true也不会有任何效果
 * 
 * @param {Material} material 
 */
function Sprite( material ) {
	//继承自Object3D
	Object3D.call( this );

	this.type = 'Sprite';
	//如果geometry未定义的话，创建一个buffergeometry
	if ( geometry === undefined ) {

		geometry = new BufferGeometry();
		//创建一个边长唯一的正方形
		var float32Array = new Float32Array( [
			- 0.5, - 0.5, 0, 0, 0,
			0.5, - 0.5, 0, 1, 0,
			0.5, 0.5, 0, 1, 1,
			- 0.5, 0.5, 0, 0, 1
		] );

		var interleavedBuffer = new InterleavedBuffer( float32Array, 5 );

		geometry.setIndex( [ 0, 1, 2,	0, 2, 3 ] );
		geometry.addAttribute( 'position', new InterleavedBufferAttribute( interleavedBuffer, 3, 0, false ) );
		geometry.addAttribute( 'uv', new InterleavedBufferAttribute( interleavedBuffer, 2, 3, false ) );

	}
	//设置geome和材质
	this.geometry = geometry;
	this.material = ( material !== undefined ) ? material : new SpriteMaterial();
	//设置中心
	this.center = new Vector2( 0.5, 0.5 );

}

Sprite.prototype = Object.assign( Object.create( Object3D.prototype ), {

	constructor: Sprite,

	isSprite: true,
	//判断射线和精灵是否相交的方法
	raycast: ( function () {

		var intersectPoint = new Vector3();
		var worldScale = new Vector3();
		var mvPosition = new Vector3();

		var alignedPosition = new Vector2();
		var rotatedPosition = new Vector2();
		var viewWorldMatrix = new Matrix4();

		var vA = new Vector3();
		var vB = new Vector3();
		var vC = new Vector3();

		var uvA = new Vector2();
		var uvB = new Vector2();
		var uvC = new Vector2();

		function transformVertex( vertexPosition, mvPosition, center, scale, sin, cos ) {

			// compute position in camera space
			alignedPosition.subVectors( vertexPosition, center ).addScalar( 0.5 ).multiply( scale );

			// to check if rotation is not zero
			if ( sin !== undefined ) {

				rotatedPosition.x = ( cos * alignedPosition.x ) - ( sin * alignedPosition.y );
				rotatedPosition.y = ( sin * alignedPosition.x ) + ( cos * alignedPosition.y );

			} else {

				rotatedPosition.copy( alignedPosition );

			}


			vertexPosition.copy( mvPosition );
			vertexPosition.x += rotatedPosition.x;
			vertexPosition.y += rotatedPosition.y;

			// transform to world space
			vertexPosition.applyMatrix4( viewWorldMatrix );

		}

		return function raycast( raycaster, intersects ) {
			//获取世界的缩放比
			worldScale.setFromMatrixScale( this.matrixWorld );
			viewWorldMatrix.getInverse( this.modelViewMatrix ).premultiply( this.matrixWorld );
			mvPosition.setFromMatrixPosition( this.modelViewMatrix );

			var rotation = this.material.rotation;
			var sin, cos;
			if ( rotation !== 0 ) {

				cos = Math.cos( rotation );
				sin = Math.sin( rotation );

			}

			var center = this.center;
			//将当前坐标变形到摄像机的矩阵中，然后再去计算，射线和这些点组成的三角形是否相交。
			transformVertex( vA.set( - 0.5, - 0.5, 0 ), mvPosition, center, worldScale, sin, cos );
			transformVertex( vB.set( 0.5, - 0.5, 0 ), mvPosition, center, worldScale, sin, cos );
			transformVertex( vC.set( 0.5, 0.5, 0 ), mvPosition, center, worldScale, sin, cos );

			uvA.set( 0, 0 );
			uvB.set( 1, 0 );
			uvC.set( 1, 1 );

			// check first triangle
			var intersect = raycaster.ray.intersectTriangle( vA, vB, vC, false, intersectPoint );

			if ( intersect === null ) {

				// check second triangle
				transformVertex( vB.set( - 0.5, 0.5, 0 ), mvPosition, center, worldScale, sin, cos );
				uvB.set( 0, 1 );

				intersect = raycaster.ray.intersectTriangle( vA, vC, vB, false, intersectPoint );
				if ( intersect === null ) {

					return;

				}

			}
			//判断与射线之间的距离
			var distance = raycaster.ray.origin.distanceTo( intersectPoint );

			if ( distance < raycaster.near || distance > raycaster.far ) return;

			intersects.push( {

				distance: distance,
				point: intersectPoint.clone(),
				uv: Triangle.getUV( intersectPoint, vA, vB, vC, uvA, uvB, uvC, new Vector2() ),
				face: null,
				object: this

			} );

		};

	}() ),
	//克隆方法
	clone: function () {

		return new this.constructor( this.material ).copy( this );

	},
	//复制方法
	copy: function ( source ) {

		Object3D.prototype.copy.call( this, source );

		if ( source.center !== undefined ) this.center.copy( source.center );

		return this;

	}


} );

export { Sprite };
