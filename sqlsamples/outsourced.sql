-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2019 at 03:17 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `outsourced`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `email` text COLLATE utf8_bin NOT NULL,
  `password` text COLLATE utf8_bin NOT NULL,
  `companyname` text COLLATE utf8_bin NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `logo` text COLLATE utf8_bin NOT NULL,
  `creatorname` text COLLATE utf8_bin NOT NULL,
  `nric` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `nomads`
--

CREATE TABLE `nomads` (
  `id` int(11) NOT NULL,
  `email` text COLLATE utf8_bin NOT NULL,
  `password` text COLLATE utf8_bin NOT NULL,
  `name` text COLLATE utf8_bin NOT NULL,
  `profilepic` int(11) NOT NULL,
  `iban` text COLLATE utf8_bin ,
  `swift` text COLLATE utf8_bin,
  `accnum` text COLLATE utf8_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `nomads_skills`
--

CREATE TABLE `nomads_skills` (
  `nomadid` int(11) NOT NULL,
  `skillid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8_bin NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `status` enum('open','inprogress','completed') COLLATE utf8_bin NOT NULL,
  `payrate` int(11) NOT NULL,
  `companyby` int(11) NOT NULL,
  `nomadtaken` int(11),
  `postedtime` datetime NOT NULL,
  `claimedtime` datetime,
  `finishedtime` datetime
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `projpics`
--

CREATE TABLE `projpics` (
  `id` int(11) NOT NULL,
  `projid` int(11) NOT NULL,
  `pic` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `skill` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nomads`
--
ALTER TABLE `nomads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nomads_skills`
--
ALTER TABLE `nomads_skills`
  ADD KEY `nomadid` (`nomadid`),
  ADD KEY `skillid` (`skillid`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `companyby` (`companyby`);


--
-- Indexes for table `projpics`
--
ALTER TABLE `projpics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projid` (`projid`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `nomads_skills`
--
ALTER TABLE `nomads_skills`
  ADD CONSTRAINT `nomads_skills_ibfk_1` FOREIGN KEY (`nomadid`) REFERENCES `nomads` (`id`),
  ADD CONSTRAINT `nomads_skills_ibfk_2` FOREIGN KEY (`skillid`) REFERENCES `skills` (`id`);

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`companyby`) REFERENCES `companies` (`id`);
--
-- Constraints for table `projpics`
--
ALTER TABLE `projpics`
  ADD CONSTRAINT `projpics_ibfk_1` FOREIGN KEY (`projid`) REFERENCES `projects` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
