<?php

/*
 * API Pública educ.ar
 *  
 * Ejemplo de llamado a endpoint: Obtención de capitulos de una serie
 * 
 */
$service_url = 'https://preprod-apibelgrano.educ.ar/1.0/videos';
$api_key     = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
$fields      = array();
$filters     = array();

$params = [
    'app_key' => $api_key,
    'fields'  => $fields,
    'filters' => $filters,
    'pretty'  => true,
    'limit'   => 50,
];

function get_response($url) {

    $options = array(
        CURLOPT_RETURNTRANSFER => false,
        CURLOPT_HEADER         => false, 
        CURLOPT_FOLLOWLOCATION => true,  
        CURLOPT_MAXREDIRS      => 10,    
        CURLOPT_ENCODING       => "",     
        CURLOPT_AUTOREFERER    => true,  
        CURLOPT_CONNECTTIMEOUT => 120,    
        CURLOPT_TIMEOUT        => 120,   
    ); 

    $url = str_replace(" ","%20",$url);

    $ch = curl_init($url);

    curl_setopt_array($ch, $options);

    $content = curl_exec($ch);

    curl_close($ch);

    return $content;
}

if (!function_exists('curl_version'))
    die ('Se necesita tener instalada la extensión cURL');

$request = $service_url . '/' . json_encode( $params, JSON_UNESCAPED_SLASHES | 
                                                      JSON_UNESCAPED_UNICODE );

echo $request . "\n";

$response = get_response($request);

echo $response;

?>