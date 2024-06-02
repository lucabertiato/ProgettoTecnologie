-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 02, 2024 alle 22:05
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `snapfolio`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `post`
--

CREATE TABLE `post` (
  `ID` int(11) NOT NULL,
  `IDutente` int(11) NOT NULL,
  `file` blob NOT NULL,
  `descrizione` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `topics`
--

CREATE TABLE `topics` (
  `ID` int(11) NOT NULL,
  `nome` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `topicsutente`
--

CREATE TABLE `topicsutente` (
  `IDutente` int(11) NOT NULL,
  `IDtopics` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `ID` int(11) NOT NULL,
  `email` varchar(32) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`ID`, `email`, `username`, `password`, `admin`) VALUES
(1, 'lucabertiato@gmail.com', 'luca', '0cc175b9c0f1b6a831c399e269772661', 0),
(4, 'pluto@gmail.com', 'pluto', '0cc175b9c0f1b6a831c399e269772661', 1);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDutente` (`IDutente`);

--
-- Indici per le tabelle `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `topicsutente`
--
ALTER TABLE `topicsutente`
  ADD UNIQUE KEY `IDutente_2` (`IDutente`,`IDtopics`),
  ADD KEY `IDutente` (`IDutente`),
  ADD KEY `IDtopics` (`IDtopics`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `post`
--
ALTER TABLE `post`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `topics`
--
ALTER TABLE `topics`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`IDutente`) REFERENCES `utenti` (`ID`);

--
-- Limiti per la tabella `topicsutente`
--
ALTER TABLE `topicsutente`
  ADD CONSTRAINT `topicsutente_ibfk_1` FOREIGN KEY (`IDutente`) REFERENCES `utenti` (`ID`),
  ADD CONSTRAINT `topicsutente_ibfk_2` FOREIGN KEY (`IDtopics`) REFERENCES `topics` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
