-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2020 a las 18:32:38
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `csgosmart`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `armas`
--

CREATE TABLE `armas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `coste` int(11) DEFAULT NULL,
  `danio` double DEFAULT NULL,
  `penetracion` double DEFAULT NULL,
  `municion_cargador` int(11) DEFAULT NULL,
  `municion_reserva` int(11) DEFAULT NULL,
  `recompensa` double DEFAULT NULL,
  `img_arma` varchar(45) DEFAULT NULL,
  `gif_recoil` varchar(45) DEFAULT NULL,
  `gif_control` varchar(45) DEFAULT NULL,
  `gif_ingame` varchar(45) DEFAULT NULL,
  `categorias_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `armas`
--

INSERT INTO `armas` (`id`, `nombre`, `coste`, `danio`, `penetracion`, `municion_cargador`, `municion_reserva`, `recompensa`, `img_arma`, `gif_recoil`, `gif_control`, `gif_ingame`, `categorias_id`) VALUES
(1, 'AK-47', 2700, NULL, NULL, 30, 75, NULL, NULL, NULL, NULL, NULL, 4),
(2, 'M4A1-S', 3100, NULL, NULL, 25, 75, NULL, NULL, NULL, NULL, NULL, 4),
(4, 'M4A4', 3100, NULL, NULL, 30, 90, NULL, NULL, NULL, NULL, NULL, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cajas`
--

CREATE TABLE `cajas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `imagen_caja` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Pistolas'),
(2, 'Pesado'),
(3, 'Subfusiles'),
(4, 'Rifles');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mapas`
--

CREATE TABLE `mapas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `img_plano` varchar(45) DEFAULT NULL,
  `img_logo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skins`
--

CREATE TABLE `skins` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `img_skin` varchar(45) DEFAULT NULL,
  `cajas_id` int(11) NOT NULL,
  `armas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipogranadas`
--

CREATE TABLE `tipogranadas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `updates`
--

CREATE TABLE `updates` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `contenido` text,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `updates`
--

INSERT INTO `updates` (`id`, `titulo`, `contenido`, `fecha`) VALUES
(47, 'Release Notes for 3/4/2020', '[ MISC ]\n– Updated Diamond Operation Coin materials.\n– Fixed several respawn-related bugs in the Co-op Strike mission.\n– Fixed a bug in exploding barrels sometimes awarding multiple points towards mission progress.\n– Fixed a UI error showing negative number of missions for Diamond Operation Coin owners.\n– Fixed a UI error in workshop maps.\n– Updated Mac-10 texture UVs for Inferno 2019 Collection.', '2020-03-11 20:05:37'),
(48, 'Release Notes for 3/3/2020', '[ OPERATION SHATTERED WEB ]\n– Added all operation missions for Week 16.\n\n[ MISC ]\n– Materials now store an internal parameter precache to reduce the need for disk access during gameplay.\n– Fixed a regression with player models in Danger Zone.\n\n[ MAPS ]\nVertigo\n– Fixed server lag exploit\n– Fixed minor graphical bugs', '2020-03-11 20:06:18'),
(49, 'Gran Final', 'Estamos en las últimas semanas de la Operación Shattered Web, y los jugadores tienen hasta el 30 de marzo para jugar misiones, obtener progresos y canjear las recompensas de la operación.\n\nHoy se pone en marcha la última tarjeta de misión, lo que significa que empezaremos a entregar monedas de diamante de la operación a los usuarios que hayan completado 100 misiones. La tarjeta de esta semana, «Hora de sacar la basura», incluye una segunda misión de Ataque cooperativo que encomienda a los jugadores la tarea de encontrar y eliminar a Franz Kriegeld. ¡Que no escape!', '2020-03-12 17:51:23'),
(50, 'Elige tu propia mira', 'Personalizar tu mira nunca había sido tan fácil. En el menú de ajustes encontrarás una gran variedad de opciones para configurar la mira a tu gusto. Puedes compartir tu código de mira con otros o importar un código para probar la de otra persona.', '2020-03-12 17:51:57'),
(51, 'Compra completa', 'La actualización de hoy también trae un rediseño visual del menú de compra, que incluye una vista previa interactiva de tu personaje sosteniendo las armas y el equipamiento. Además de una ligera reorganización, ahora puedes previsualizar el equipamiento que te puedes permitir gracias a unos iconos iluminados en la rueda de compra.', '2020-03-12 17:53:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(45) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `utilidades`
--

CREATE TABLE `utilidades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `equipo` tinyint(4) DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `video` varchar(45) DEFAULT NULL,
  `tipogranadas_id` int(11) NOT NULL,
  `mapas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `armas`
--
ALTER TABLE `armas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_armas_categorias1_idx` (`categorias_id`);

--
-- Indices de la tabla `cajas`
--
ALTER TABLE `cajas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mapas`
--
ALTER TABLE `mapas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `skins`
--
ALTER TABLE `skins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_skins_cajas1_idx` (`cajas_id`),
  ADD KEY `fk_skins_armas1_idx` (`armas_id`);

--
-- Indices de la tabla `tipogranadas`
--
ALTER TABLE `tipogranadas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `updates`
--
ALTER TABLE `updates`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `utilidades`
--
ALTER TABLE `utilidades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_utilidades_tipogranadas1_idx` (`tipogranadas_id`),
  ADD KEY `fk_utilidades_mapas1_idx` (`mapas_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `armas`
--
ALTER TABLE `armas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `cajas`
--
ALTER TABLE `cajas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `mapas`
--
ALTER TABLE `mapas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `skins`
--
ALTER TABLE `skins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipogranadas`
--
ALTER TABLE `tipogranadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `updates`
--
ALTER TABLE `updates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `utilidades`
--
ALTER TABLE `utilidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `armas`
--
ALTER TABLE `armas`
  ADD CONSTRAINT `fk_armas_categorias1` FOREIGN KEY (`categorias_id`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `skins`
--
ALTER TABLE `skins`
  ADD CONSTRAINT `fk_skins_armas1` FOREIGN KEY (`armas_id`) REFERENCES `armas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_skins_cajas1` FOREIGN KEY (`cajas_id`) REFERENCES `cajas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `utilidades`
--
ALTER TABLE `utilidades`
  ADD CONSTRAINT `fk_utilidades_mapas1` FOREIGN KEY (`mapas_id`) REFERENCES `mapas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_utilidades_tipogranadas1` FOREIGN KEY (`tipogranadas_id`) REFERENCES `tipogranadas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
