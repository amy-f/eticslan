<?php
/**
 * Created by PhpStorm.
 * User: Amélie
 * Date: 2016-05-15
 * Time: 00:39
 */

//collect data send as XML
$xml = file_get_contents('php://input');
//open a file handler with read and write permission
$fh = fopen('../xml/teamlistings.xml', 'r+');
//writing XML string to the new file
fwrite($fh, $xml);
//closing the file handler
fclose($fh);
echo "bleeeeeeeehhhhh...";
?>