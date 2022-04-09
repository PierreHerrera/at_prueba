/*
 Navicat Premium Data Transfer

 Source Server         : LOCALHOST
 Source Server Type    : MySQL
 Source Server Version : 100137
 Source Host           : localhost:3306
 Source Schema         : apuesta_total

 Target Server Type    : MySQL
 Target Server Version : 100137
 File Encoding         : 65001

 Date: 07/04/2022 17:29:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tbl_banco
-- ----------------------------
DROP TABLE IF EXISTS `tbl_banco`;
CREATE TABLE `tbl_banco`  (
  `id_banco` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_banco` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nro_cuenta` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha_hora_registro` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id_banco`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for tbl_cliente
-- ----------------------------
DROP TABLE IF EXISTS `tbl_cliente`;
CREATE TABLE `tbl_cliente`  (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `id_player` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `id_tipo_documento` int(11) NOT NULL,
  `num_documento` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '1 DNI 2 CARNET DE EXTRANJERIA',
  `nombres` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `apellidos` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `celular` varchar(9) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `correo` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `monto_actual` decimal(18, 2) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha_hora_registro` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_cliente`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for tbl_tipo_documento
-- ----------------------------
DROP TABLE IF EXISTS `tbl_tipo_documento`;
CREATE TABLE `tbl_tipo_documento`  (
  `id_tipo_documento` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_doc` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_tipo_documento`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for tbl_transaccion
-- ----------------------------
DROP TABLE IF EXISTS `tbl_transaccion`;
CREATE TABLE `tbl_transaccion`  (
  `id_transaccion` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id_canal` int(255) NULL DEFAULT NULL,
  `id_banco` int(255) NULL DEFAULT NULL,
  `monto` decimal(18, 2) NULL DEFAULT NULL,
  `voucher` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `estado` tinyint(1) NULL DEFAULT NULL,
  `fecha_hora_registro` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id_transaccion`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
