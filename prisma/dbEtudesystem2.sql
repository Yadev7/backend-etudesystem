-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2024 at 03:58 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `centreapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `activitylogs`
--

CREATE TABLE `activitylogs` (
  `id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Message` text NOT NULL,
  `Actor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dispoensg`
--

CREATE TABLE `dispoensg` (
  `id` int(11) NOT NULL,
  `idEnsg` int(11) DEFAULT NULL,
  `jour` int(11) DEFAULT NULL,
  `heureDeb` time DEFAULT NULL,
  `heureFin` time DEFAULT NULL,
  `idEtab` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dispoensg`
--

INSERT INTO `dispoensg` (`id`, `idEnsg`, `jour`, `heureDeb`, `heureFin`, `idEtab`) VALUES
(3, 4, 4, '14:00:00', '12:00:00', 6),
(4, 4, 2, '12:00:00', '12:00:00', 6),
(5, 4, 1, '10:00:00', '14:00:00', 6),
(10, 3, 1, '10:00:00', '00:00:00', 6),
(11, 3, 2, '14:30:00', '18:30:00', 6),
(15, 5, 2, '08:00:00', '12:00:00', 6),
(16, 5, 2, '15:00:00', '22:00:00', 6),
(17, 5, 3, '15:00:00', '19:00:00', 6);

-- --------------------------------------------------------

--
-- Table structure for table `eleve`
--

CREATE TABLE `eleve` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `num` varchar(255) NOT NULL,
  `idNiv` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `tel` varchar(25) DEFAULT NULL,
  `login` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `etat` tinyint(1) DEFAULT 1,
  `wallet` float DEFAULT 0,
  `etabOrigin` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `fraisInsc` float DEFAULT NULL,
  `idEtab` int(11) NOT NULL,
  `datePremiereInscription` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eleve`
--

INSERT INTO `eleve` (`id`, `nom`, `prenom`, `num`, `idNiv`, `email`, `tel`, `login`, `pwd`, `etat`, `wallet`, `etabOrigin`, `image`, `fraisInsc`, `idEtab`, `datePremiereInscription`) VALUES
(1, 'Ahmed', 'Selhami', '2024147400', 4, 'test@test.test', '0612345687', 'test@test.test', 'test@test.test', 1, 0, 'test', NULL, 50, 6, '2024-01-23'),
(2, 'Nabeel', 'Essami', '2024624752', 1, 'Nabeel@gmail.com', '0708555544', 'Nabeel@gmail.com', 'Nabeel@gmail.com', 1, 0, '', './$files-dir/65afd565289e0.png', 50, 6, '2024-01-23'),
(3, 'Samira', 'ElHillali', '2024629461', 1, 'Samira.Samira@gmail.com', '0706054488', 'Samira.Samira@gmail.com', 'Samira.Samira@gmail.com', 1, 0, 'Lycee Sidi Sliman', './$files-dir/65afd69d87e48.png', 50, 6, '2024-01-23'),
(4, 'Achraf', 'Ghoulam', '2024350334', 2, 'Ghoulam@gmail.com', '0722669988', 'Ghoulam@gmail.com', 'Ghoulam@gmail.com', 1, 0, 'Lycee Sidi Sliman', './$files-dir/65b0decc3ba9f.png', 50, 6, '2024-01-24'),
(5, 'Sanae', 'Lkhdar', '2024530601', 2, 'Lkhdar22@gmail.com', '0555123457', 'Lkhdar22@gmail.com', 'Lkhdar22@gmail.com', 1, 500, 'Lycee Sidi Brahim', './$files-dir/65b10ec43b921.png', 100, 6, '2024-01-24');

-- --------------------------------------------------------

--
-- Table structure for table `emploi`
--

CREATE TABLE `emploi` (
  `id` int(11) NOT NULL,
  `idGroupe` int(11) NOT NULL,
  `idSalle` int(11) NOT NULL,
  `idEnsg` int(11) NOT NULL,
  `jour` int(11) NOT NULL,
  `heureDebut` time NOT NULL,
  `heureFin` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `emploi`
--

INSERT INTO `emploi` (`id`, `idGroupe`, `idSalle`, `idEnsg`, `jour`, `heureDebut`, `heureFin`) VALUES
(1, 1, 1, 3, 2, '18:00:00', '20:00:00'),
(2, 99, 5, 3, 2, '17:00:00', '19:00:00'),
(12, 99, 6, 4, 7, '08:00:00', '11:00:00'),
(15, 106, 1, 4, 3, '08:00:00', '10:30:00'),
(16, 1, 6, 3, 2, '14:00:00', '16:00:00'),
(17, 99, 1, 3, 3, '18:00:00', '20:00:00'),
(19, 99, 1, 4, 7, '17:00:00', '20:00:00'),
(21, 1, 1, 3, 2, '20:00:00', '21:00:00'),
(24, 108, 1, 3, 4, '00:00:00', '14:00:00'),
(25, 108, 5, 3, 5, '14:15:00', '04:30:00'),
(27, 108, 5, 3, 6, '14:00:00', '15:30:00'),
(32, 1, 1, 3, 3, '18:00:00', '20:00:00'),
(36, 1, 6, 3, 2, '21:30:00', '22:30:00'),
(44, 108, 6, 3, 1, '12:00:00', '14:00:00'),
(47, 113, 5, 5, 7, '14:00:00', '16:00:00'),
(48, 114, 1, 4, 1, '20:00:00', '22:00:00'),
(49, 114, 6, 4, 7, '14:00:00', '16:30:00'),
(50, 115, 1, 3, 2, '10:00:00', '00:00:00');

--
-- Triggers `emploi`
--
DELIMITER $$
CREATE TRIGGER `before_insert_emploi` BEFORE INSERT ON `emploi` FOR EACH ROW BEGIN
    DECLARE conflict_count INT;

    -- Check for interference
    SELECT COUNT(*)
    INTO conflict_count
    FROM emploi e
    WHERE e.jour = NEW.jour
        AND e.idEnsg = NEW.idEnsg
        AND e.idSalle = NEW.idSalle
        AND (
            (NEW.heureDebut < e.heureFin AND NEW.heureFin > e.heureDebut)
            OR (e.heureDebut < NEW.heureFin AND e.heureFin > NEW.heureDebut)
        );

    -- If there is a conflict, prevent insertion
    IF conflict_count > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insertion prevented. Conflicting emploi already exists.';
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `enseignant`
--

CREATE TABLE `enseignant` (
  `id` int(11) NOT NULL,
  `nomEnsg` varchar(50) DEFAULT NULL,
  `prenomEnsg` varchar(50) DEFAULT NULL,
  `telEnsg` varchar(20) DEFAULT NULL,
  `adresseEnsg` varchar(200) DEFAULT NULL,
  `modePaiement` varchar(50) DEFAULT NULL,
  `taux` int(11) DEFAULT NULL,
  `login` varchar(50) DEFAULT NULL,
  `password` varchar(28) DEFAULT NULL,
  `emailEnsg` varchar(50) DEFAULT NULL,
  `idEtab` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enseignant`
--

INSERT INTO `enseignant` (`id`, `nomEnsg`, `prenomEnsg`, `telEnsg`, `adresseEnsg`, `modePaiement`, `taux`, `login`, `password`, `emailEnsg`, `idEtab`) VALUES
(3, 'Rachid', 'Ezerouli', '0655483215', '24 St.Almanama Rue Med V', 'forfait', 5000, 'Rachid.Ezerouli@gmail.com', 'Rachid.Ezerouli@gmail.co', 'Rachid.Ezerouli@gmail.com', 6),
(4, 'Sanae', 'Bakali', '0754335987', '14 St.Almanama Rue Med V', 'pour-eleve', 50, 'Bakali.123@gmail.com', 'Bakali.123@gmail.com', 'Bakali.123@gmail.com', 6),
(5, 'Ahmed', 'Amari', '0655412395', '24 St.Almanama Rue Med V', 'forfait', 5000, 'Rachid@gmail.com', 'Rachid@gmail.com', 'Rachid@gmail.com', 6);

-- --------------------------------------------------------

--
-- Table structure for table `etablissement`
--

CREATE TABLE `etablissement` (
  `id` int(11) NOT NULL,
  `nomEtab` varchar(50) DEFAULT NULL,
  `typeEtab` varchar(50) DEFAULT NULL,
  `descEtab` varchar(200) DEFAULT NULL,
  `nomResp` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `logo` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `etablissement`
--

INSERT INTO `etablissement` (`id`, `nomEtab`, `typeEtab`, `descEtab`, `nomResp`, `email`, `tel`, `logo`) VALUES
(6, 'Establissement NiStCentre', 'centre-formation', 'Establissement NiStCentre', 'Ahmed Ribati', 'admin2023@newdev.com', '0708555544', '659c04606be7b.png');

-- --------------------------------------------------------

--
-- Table structure for table `groupeheure`
--

CREATE TABLE `groupeheure` (
  `id` int(11) NOT NULL,
  `idNiveau` int(11) NOT NULL,
  `idEnsg` int(11) NOT NULL,
  `idMatiere` int(11) NOT NULL,
  `numGroupe` varchar(50) NOT NULL,
  `type` varchar(100) NOT NULL,
  `prix_mensuel` double(10,2) DEFAULT NULL,
  `modePaiementEns` varchar(50) DEFAULT NULL,
  `taux` float DEFAULT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `nbrHeureSemaine` float NOT NULL,
  `etatGroupe` varchar(50) NOT NULL,
  `idEtab` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `groupeheure`
--

INSERT INTO `groupeheure` (`id`, `idNiveau`, `idEnsg`, `idMatiere`, `numGroupe`, `type`, `prix_mensuel`, `modePaiementEns`, `taux`, `date_debut`, `date_fin`, `nbrHeureSemaine`, `etatGroupe`, `idEtab`) VALUES
(1, 1, 4, 1, 'G1-SCIEX-SVT', 'formation', 250.00, 'forfait', 2500, '2024-01-22', '2024-01-31', 8, 'en-cours', 6),
(99, 1, 3, 1, 'G-400-1 BAC SCI EX-SVT', 'formation', 150.00, 'forfait', 5000, '2024-01-01', '2024-01-31', 8, 'en-cours', 6),
(106, 4, 3, 1, 'G-170-TCS AR-SVT', 'soutiens', 100.00, 'forfait', 5000, '2024-01-01', '2024-04-30', 12, 'en-cours', 6),
(108, 4, 3, 3, 'G-100-TCS AR-Arabe', 'soutiens', 150.00, 'pour-eleve', 40, '2024-01-01', '2024-06-29', 12, 'en-cours', 6),
(110, 2, 3, 3, 'G5-2BSP-Arabe', 'soutiens', 100.00, 'forfait', 5000, '2024-01-01', '2024-01-31', 8, 'en-instance', 6),
(111, 2, 3, 4, 'G6-2BSP-English', 'soutiens', 100.00, 'forfait', 5000, '2024-01-01', '2024-01-31', 8, 'en-instance', 6),
(112, 2, 5, 7, 'G7-2BSP-Francais', 'formation', 100.00, 'forfait', 4000, '2024-01-01', '2024-02-29', 8, 'en-cours', 6),
(113, 2, 5, 4, 'G8-2BSP-English', 'soutiens', 150.00, 'forfait', 2000, '2024-01-01', '2024-01-31', 8, 'en-cours', 6),
(114, 2, 4, 1, 'G9-2BSP-SVT', 'soutiens', 250.00, 'forfait', 1500, '2024-01-01', '2024-04-30', 12, 'en-instance', 6),
(115, 2, 3, 6, 'G10-2BSP-PC', 'soutiens', 250.00, 'forfait', 1500, '2024-01-01', '2024-06-26', 8, 'en-instance', 6);

-- --------------------------------------------------------

--
-- Table structure for table `heures`
--

CREATE TABLE `heures` (
  `id_heures` int(2) NOT NULL,
  `heures` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `heures`
--

INSERT INTO `heures` (`id_heures`, `heures`) VALUES
(1, '08:00'),
(2, '08:15'),
(3, '08:30'),
(4, '08:45'),
(5, '09:00'),
(6, '09:15'),
(7, '09:30'),
(8, '09:45'),
(9, '10:00'),
(10, '10:15'),
(11, '10:30'),
(12, '10:45'),
(13, '11:00'),
(14, '11:15'),
(15, '11:30'),
(16, '11:45'),
(17, '12:00'),
(18, '12:15'),
(19, '12:30'),
(20, '12:45'),
(21, '13:00'),
(22, '13:15'),
(23, '13:30'),
(24, '13:45'),
(25, '14:00'),
(26, '14:15'),
(27, '14:30'),
(28, '14:45'),
(29, '15:00'),
(30, '15:15'),
(31, '15:30'),
(32, '15:45'),
(33, '16:00'),
(34, '16:15'),
(35, '16:30'),
(36, '16:45'),
(37, '17:00'),
(38, '17:15'),
(39, '17:30'),
(40, '17:45'),
(41, '18:00'),
(42, '18:15'),
(43, '18:30'),
(44, '18:45'),
(45, '19:00'),
(46, '19:15'),
(47, '19:30'),
(48, '19:45'),
(49, '20:00'),
(50, '20:15'),
(51, '20:30'),
(52, '20:45'),
(53, '21:00'),
(54, '21:15'),
(55, '21:30'),
(56, '21:45'),
(57, '22:00'),
(58, '22:15'),
(59, '22:30'),
(60, '22:45'),
(61, '23:00'),
(62, '23:15'),
(63, '23:30'),
(64, '23:45'),
(65, '00:00');

-- --------------------------------------------------------

--
-- Table structure for table `historiqueensggroupe`
--

CREATE TABLE `historiqueensggroupe` (
  `id` int(11) NOT NULL,
  `idGroupe` int(11) NOT NULL,
  `idEnsg` int(11) NOT NULL,
  `dateDebut` date NOT NULL,
  `dateFin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `historiqueensggroupe`
--

INSERT INTO `historiqueensggroupe` (`id`, `idGroupe`, `idEnsg`, `dateDebut`, `dateFin`) VALUES
(1, 1, 3, '2024-01-01', '2024-01-22'),
(2, 99, 4, '2024-01-01', '2024-01-22'),
(3, 106, 4, '2024-01-01', '2024-01-22');

-- --------------------------------------------------------

--
-- Table structure for table `inscription`
--

CREATE TABLE `inscription` (
  `id` int(11) NOT NULL,
  `idGroupe` int(11) NOT NULL,
  `idEleve` int(11) NOT NULL,
  `prixMensuel` float NOT NULL,
  `dateInscription` timestamp NOT NULL DEFAULT current_timestamp(),
  `etatInscription` tinyint(1) NOT NULL DEFAULT 1,
  `dateSusp` date DEFAULT NULL,
  `dateReprise` date DEFAULT NULL,
  `idPack` int(11) DEFAULT NULL,
  `idEtab` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inscription`
--

INSERT INTO `inscription` (`id`, `idGroupe`, `idEleve`, `prixMensuel`, `dateInscription`, `etatInscription`, `dateSusp`, `dateReprise`, `idPack`, `idEtab`) VALUES
(36, 115, 5, 250, '2024-01-25', 1, NULL, NULL, NULL, 6),
(37, 114, 5, 250, '2024-01-25', 1, NULL, NULL, NULL, 6);

-- --------------------------------------------------------

--
-- Table structure for table `jours`
--

CREATE TABLE `jours` (
  `id_jours` int(11) NOT NULL,
  `nom_jours` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jours`
--

INSERT INTO `jours` (`id_jours`, `nom_jours`) VALUES
(2, 'lundi'),
(3, 'mardi'),
(4, 'mercredi'),
(5, 'jeudi'),
(6, 'vendredi'),
(7, 'samedi'),
(1, 'dimanche');

-- --------------------------------------------------------

--
-- Table structure for table `matiere`
--

CREATE TABLE `matiere` (
  `id` int(11) NOT NULL,
  `nomMatiere` varchar(50) DEFAULT NULL,
  `idEtab` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matiere`
--

INSERT INTO `matiere` (`id`, `nomMatiere`, `idEtab`) VALUES
(1, 'SVT', 6),
(3, 'Arabe', 6),
(4, 'English', 6),
(6, 'PC', 6),
(7, 'Francais', 6),
(9, 'Math', 6);

-- --------------------------------------------------------

--
-- Table structure for table `matiereensg`
--

CREATE TABLE `matiereensg` (
  `id` int(11) NOT NULL,
  `idEtab` int(11) DEFAULT NULL,
  `idEnsg` int(11) DEFAULT NULL,
  `idMatiere` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matiereensg`
--

INSERT INTO `matiereensg` (`id`, `idEtab`, `idEnsg`, `idMatiere`) VALUES
(5, 6, 4, 1),
(12, 6, 3, 1),
(13, 6, 3, 3),
(14, 6, 3, 4),
(15, 6, 3, 6),
(16, 6, 3, 7),
(19, 6, 5, 4),
(20, 6, 5, 7);

-- --------------------------------------------------------

--
-- Table structure for table `niveauclass`
--

CREATE TABLE `niveauclass` (
  `id` int(11) NOT NULL,
  `refNiveau` varchar(20) DEFAULT NULL,
  `fraisInscri` varchar(50) DEFAULT NULL,
  `idEtab` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `niveauclass`
--

INSERT INTO `niveauclass` (`id`, `refNiveau`, `fraisInscri`, `idEtab`) VALUES
(1, '1 BAC SCI EX', '70', 6),
(2, '2 BAC SCI PC', '80', 6),
(4, 'TCS AR', '70', 6),
(6, '3e Collegial', '50', 6);

-- --------------------------------------------------------

--
-- Table structure for table `pack`
--

CREATE TABLE `pack` (
  `id` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `idNiveau` int(11) NOT NULL,
  `prixPack` float NOT NULL,
  `idEtab` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pack`
--

INSERT INTO `pack` (`id`, `libelle`, `idNiveau`, `prixPack`, `idEtab`) VALUES
(7, 'Pack Langues', 2, 300, 6),
(8, 'Pack 2BAC PC', 2, 600, 6);

-- --------------------------------------------------------

--
-- Table structure for table `packmatieres`
--

CREATE TABLE `packmatieres` (
  `id` int(11) NOT NULL,
  `idPack` int(11) NOT NULL,
  `idMatiere` int(11) NOT NULL,
  `prixMatiere` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packmatieres`
--

INSERT INTO `packmatieres` (`id`, `idPack`, `idMatiere`, `prixMatiere`) VALUES
(13, 7, 3, 100),
(14, 7, 4, 100),
(15, 7, 7, 100),
(16, 8, 1, 200),
(17, 8, 6, 200),
(18, 8, 4, 200);

-- --------------------------------------------------------

--
-- Table structure for table `reglementsrecu`
--

CREATE TABLE `reglementsrecu` (
  `id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `montant` float NOT NULL,
  `typeReglement` varchar(255) DEFAULT NULL,
  `observation` text DEFAULT NULL,
  `idEleve` int(11) NOT NULL,
  `idEtab` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reglementsrecu`
--

INSERT INTO `reglementsrecu` (`id`, `date`, `montant`, `typeReglement`, `observation`, `idEleve`, `idEtab`) VALUES
(2, '2024-01-25', 500, 'Espece', '...', 5, 6);

-- --------------------------------------------------------

--
-- Table structure for table `salle`
--

CREATE TABLE `salle` (
  `id` int(11) NOT NULL,
  `nomSalle` varchar(50) DEFAULT NULL,
  `typeSalle` varchar(50) DEFAULT NULL,
  `etage` varchar(50) DEFAULT NULL,
  `capacite` int(11) DEFAULT NULL,
  `idEtab` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `salle`
--

INSERT INTO `salle` (`id`, `nomSalle`, `typeSalle`, `etage`, `capacite`, `idEtab`) VALUES
(1, 'Salle Standard 1', 'Standard', '1', 20, 6),
(5, 'Salle Conferance 1', 'Conference', '1', 200, 6),
(6, 'Salle Informatique 1', 'Informatique', '2', 14, 6);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nomUser` varchar(50) DEFAULT NULL,
  `prenomUser` varchar(50) DEFAULT NULL,
  `fctUser` varchar(50) DEFAULT NULL,
  `roleUser` varchar(50) DEFAULT NULL,
  `loginUser` varchar(100) DEFAULT NULL,
  `passwordUser` varchar(50) DEFAULT NULL,
  `statusCompte` varchar(50) DEFAULT NULL,
  `idEtab` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `nomUser`, `prenomUser`, `fctUser`, `roleUser`, `loginUser`, `passwordUser`, `statusCompte`, `idEtab`) VALUES
(5, 'Said', 'Ribati', NULL, 'admin', 'admin2023@newdev.com', 'admin', 'actif', 6),
(7, 'Jamal', 'Koloban', NULL, 'user', 'Jamal@Jamal.com', 'Jamal@Jamal.com', 'actif', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activitylogs`
--
ALTER TABLE `activitylogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Actor` (`Actor`);

--
-- Indexes for table `dispoensg`
--
ALTER TABLE `dispoensg`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEnsg` (`idEnsg`),
  ADD KEY `idEtab` (`idEtab`);

--
-- Indexes for table `eleve`
--
ALTER TABLE `eleve`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEtab` (`idEtab`),
  ADD KEY `idNiv` (`idNiv`);

--
-- Indexes for table `emploi`
--
ALTER TABLE `emploi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emploi_ibfk_1` (`idEnsg`),
  ADD KEY `emploi_ibfk_2` (`idGroupe`),
  ADD KEY `emploi_ibfk_3` (`idSalle`);

--
-- Indexes for table `enseignant`
--
ALTER TABLE `enseignant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEtab` (`idEtab`);

--
-- Indexes for table `etablissement`
--
ALTER TABLE `etablissement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groupeheure`
--
ALTER TABLE `groupeheure`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEnsg` (`idEnsg`),
  ADD KEY `idMatiere` (`idMatiere`),
  ADD KEY `idNiveau` (`idNiveau`),
  ADD KEY `idEtab` (`idEtab`);

--
-- Indexes for table `historiqueensggroupe`
--
ALTER TABLE `historiqueensggroupe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEnsg` (`idEnsg`),
  ADD KEY `idGroupe` (`idGroupe`);

--
-- Indexes for table `inscription`
--
ALTER TABLE `inscription`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idGroupe` (`idGroupe`),
  ADD KEY `idPack` (`idPack`),
  ADD KEY `idEleve` (`idEleve`),
  ADD KEY `idEtab` (`idEtab`);

--
-- Indexes for table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEtab` (`idEtab`);

--
-- Indexes for table `matiereensg`
--
ALTER TABLE `matiereensg`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEtab` (`idEtab`),
  ADD KEY `idEnsg` (`idEnsg`),
  ADD KEY `idMatiere` (`idMatiere`);

--
-- Indexes for table `niveauclass`
--
ALTER TABLE `niveauclass`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEtab` (`idEtab`);

--
-- Indexes for table `pack`
--
ALTER TABLE `pack`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idNiveau` (`idNiveau`),
  ADD KEY `idEtab` (`idEtab`);

--
-- Indexes for table `packmatieres`
--
ALTER TABLE `packmatieres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idMatiere` (`idMatiere`),
  ADD KEY `packmatieres_ibfk_2` (`idPack`);

--
-- Indexes for table `reglementsrecu`
--
ALTER TABLE `reglementsrecu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEleve` (`idEleve`),
  ADD KEY `idEtab` (`idEtab`);

--
-- Indexes for table `salle`
--
ALTER TABLE `salle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEtab` (`idEtab`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEtab` (`idEtab`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activitylogs`
--
ALTER TABLE `activitylogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dispoensg`
--
ALTER TABLE `dispoensg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `eleve`
--
ALTER TABLE `eleve`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `emploi`
--
ALTER TABLE `emploi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `enseignant`
--
ALTER TABLE `enseignant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `etablissement`
--
ALTER TABLE `etablissement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `groupeheure`
--
ALTER TABLE `groupeheure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `historiqueensggroupe`
--
ALTER TABLE `historiqueensggroupe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `inscription`
--
ALTER TABLE `inscription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `matiere`
--
ALTER TABLE `matiere`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `matiereensg`
--
ALTER TABLE `matiereensg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `niveauclass`
--
ALTER TABLE `niveauclass`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pack`
--
ALTER TABLE `pack`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `packmatieres`
--
ALTER TABLE `packmatieres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `reglementsrecu`
--
ALTER TABLE `reglementsrecu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `salle`
--
ALTER TABLE `salle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activitylogs`
--
ALTER TABLE `activitylogs`
  ADD CONSTRAINT `activitylogs_ibfk_1` FOREIGN KEY (`Actor`) REFERENCES `user` (`id`);

--
-- Constraints for table `dispoensg`
--
ALTER TABLE `dispoensg`
  ADD CONSTRAINT `dispoensg_ibfk_1` FOREIGN KEY (`idEnsg`) REFERENCES `enseignant` (`id`),
  ADD CONSTRAINT `dispoensg_ibfk_2` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`);

--
-- Constraints for table `eleve`
--
ALTER TABLE `eleve`
  ADD CONSTRAINT `eleve_ibfk_1` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`),
  ADD CONSTRAINT `eleve_ibfk_2` FOREIGN KEY (`idNiv`) REFERENCES `niveauclass` (`id`);

--
-- Constraints for table `emploi`
--
ALTER TABLE `emploi`
  ADD CONSTRAINT `emploi_ibfk_1` FOREIGN KEY (`idEnsg`) REFERENCES `enseignant` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `emploi_ibfk_2` FOREIGN KEY (`idGroupe`) REFERENCES `groupeheure` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `emploi_ibfk_3` FOREIGN KEY (`idSalle`) REFERENCES `salle` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `enseignant`
--
ALTER TABLE `enseignant`
  ADD CONSTRAINT `enseignant_ibfk_1` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`);

--
-- Constraints for table `groupeheure`
--
ALTER TABLE `groupeheure`
  ADD CONSTRAINT `groupeheure_ibfk_1` FOREIGN KEY (`idEnsg`) REFERENCES `enseignant` (`id`),
  ADD CONSTRAINT `groupeheure_ibfk_2` FOREIGN KEY (`idMatiere`) REFERENCES `matiere` (`id`),
  ADD CONSTRAINT `groupeheure_ibfk_3` FOREIGN KEY (`idNiveau`) REFERENCES `niveauclass` (`id`),
  ADD CONSTRAINT `groupeheure_ibfk_4` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`);

--
-- Constraints for table `historiqueensggroupe`
--
ALTER TABLE `historiqueensggroupe`
  ADD CONSTRAINT `historiqueensggroupe_ibfk_1` FOREIGN KEY (`idEnsg`) REFERENCES `enseignant` (`id`),
  ADD CONSTRAINT `historiqueensggroupe_ibfk_2` FOREIGN KEY (`idGroupe`) REFERENCES `groupeheure` (`id`);

--
-- Constraints for table `inscription`
--
ALTER TABLE `inscription`
  ADD CONSTRAINT `inscription_ibfk_1` FOREIGN KEY (`idGroupe`) REFERENCES `groupeheure` (`id`),
  ADD CONSTRAINT `inscription_ibfk_2` FOREIGN KEY (`idPack`) REFERENCES `pack` (`id`),
  ADD CONSTRAINT `inscription_ibfk_3` FOREIGN KEY (`idEleve`) REFERENCES `eleve` (`id`),
  ADD CONSTRAINT `inscription_ibfk_4` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`);

--
-- Constraints for table `matiere`
--
ALTER TABLE `matiere`
  ADD CONSTRAINT `matiere_ibfk_1` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`);

--
-- Constraints for table `matiereensg`
--
ALTER TABLE `matiereensg`
  ADD CONSTRAINT `matiereensg_ibfk_1` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`),
  ADD CONSTRAINT `matiereensg_ibfk_2` FOREIGN KEY (`idEnsg`) REFERENCES `enseignant` (`id`),
  ADD CONSTRAINT `matiereensg_ibfk_3` FOREIGN KEY (`idMatiere`) REFERENCES `matiere` (`id`);

--
-- Constraints for table `niveauclass`
--
ALTER TABLE `niveauclass`
  ADD CONSTRAINT `niveauclass_ibfk_1` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`);

--
-- Constraints for table `pack`
--
ALTER TABLE `pack`
  ADD CONSTRAINT `pack_ibfk_1` FOREIGN KEY (`idNiveau`) REFERENCES `niveauclass` (`id`),
  ADD CONSTRAINT `pack_ibfk_2` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`);

--
-- Constraints for table `packmatieres`
--
ALTER TABLE `packmatieres`
  ADD CONSTRAINT `packmatieres_ibfk_1` FOREIGN KEY (`idMatiere`) REFERENCES `matiere` (`id`),
  ADD CONSTRAINT `packmatieres_ibfk_2` FOREIGN KEY (`idPack`) REFERENCES `pack` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reglementsrecu`
--
ALTER TABLE `reglementsrecu`
  ADD CONSTRAINT `reglementsrecu_ibfk_1` FOREIGN KEY (`idEleve`) REFERENCES `eleve` (`id`),
  ADD CONSTRAINT `reglementsrecu_ibfk_2` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`);

--
-- Constraints for table `salle`
--
ALTER TABLE `salle`
  ADD CONSTRAINT `salle_ibfk_1` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`idEtab`) REFERENCES `etablissement` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
