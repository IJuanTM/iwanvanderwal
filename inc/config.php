<?php
// Set the title of the page
const PAGENAME = 'Iwan van der Wal';

// Set the default redirect page
const REDIRECT = 'home';

// Set Simpl download
const VERSION = '2.1';
const SIMPL = 'files/Simpl-V' . VERSION . '.zip';

// Set the current date and time constants
define('DATE', date('Y-m-d'));
define('TIME_FULL', date('H:i:s'));
define('TIME', date('H:i'));

// Set the database values
const DB_NAME = '';
const DB_USERNAME = '';
const DB_SERVER = '';
const DB_PASSWORD = '';

// Set needed folders for page loading
const VIEW = 'view/';
const PARTS = VIEW . 'parts/';
const ERRORS = PARTS . 'errors/';

// Set img, ico and svg directories
const IMG = '/img/';
const ICO = IMG . 'ico/';
const SVG = IMG . 'svg/';

// Set needed index directories
const META = PARTS . '/index/meta.phtml';
const CSS = PARTS . '/index/css.phtml';
const JS = PARTS . '/index/js.phtml';

// Set the directories of the error pages
const ERROR_403_PAGE = ERRORS . '403.phtml';
const ERROR_404_PAGE = ERRORS . '404.phtml';
const ERROR_500_PAGE = ERRORS . '500.phtml';
const ERROR_UNSUPPORTED = ERRORS . 'unsupported.phtml';

// Server information
define('INFO', 'Server info: ' . apache_get_version());