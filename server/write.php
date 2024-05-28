<?php

header("Access-Control-Allow-Origin: *");
header("Access-control-Allow-Headers: X-Requested-With");

// visualizzo il file 
$listFromJson = file_get_contents("dischi.json"); //stringa


// decodifico il file in json 
$dischi = json_decode($listFromJson, true); // transformo in un array !!!
// ----------------------------------------------------------------------------------

$id = $_POST['id'];

if (isset($dischi[$id]['like'])) {
    unset($dischi[$id]['like']);
} else {
    $dischi[$id]['like'] = true;
}

file_put_contents('dischi.json', json_encode($dischi, JSON_PRETTY_PRINT));

header("Content-Type: application/json");

echo json_encode(['success' => true]); // Stampa la stringa JSON, non l'array
