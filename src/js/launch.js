var iss = getParameterByName('iss');
var launch = getParameterByName('launch');
var client_id = "bilirubin_chart";
var scopes = "launch patient/Patient.read patient/Observation.read patient/Observation.write";
var redirect_uri = "app.html";
//The default_config can be changed in the pipeline to use different config files for different environments.
var default_config = 'config.json';
var config_path = 'config/' + default_config;

jQuery.get(config_path, function(data) {

    for(var i = 0; i < data.length; i++){
        if (data[i].fhir_service === iss || (data[i].provider !== undefined && iss.indexOf(data[i].provider) > -1)){
            client_id = data[i].client_id;
            redirect_uri = data[i].redirect_uri;
            break;
        }
    }

    // No launch parameter provided. This is a standalone launch.
    if (launch === "") {
        scopes = scopes + " launch/patient";
    }

    console.log("client_id: " + client_id);
    console.log("scopes : " + scopes);
    console.log("redirect_uri : " + redirect_uri);
    if (redirect_uri !== null) {
        FHIR.oauth2.authorize({
            "client_id": client_id,
            "scope": scopes,
            "redirect_uri": redirect_uri
        });
    } else {
        FHIR.oauth2.authorize({
            "client_id": client_id,
            "scope": scopes
        });
    }
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
