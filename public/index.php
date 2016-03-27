<?php
if (substr($_SERVER["REQUEST_URI"], 0, 7) === '/build/'
    || substr($_SERVER["REQUEST_URI"], 0, 6) === '/data/') {
    return false; // serve the requested resource as-is.
}
require 'build/index.html';