SET AUTOCOMMIT = 0;

START TRANSACTION;

-- Patient Data Manager App
INSERT INTO client_details (client_id, client_name, logo_uri, access_token_validity_seconds, token_endpoint_auth_method) VALUES
  ('bilirubin_chart', 'Bilirubin Risk Chart App', 'https://content.hspconsortium.org/images/bilirubin/logo/bilirubin.png', 86400, 'NONE');

INSERT INTO client_scope (owner_id, scope) VALUES
  ((SELECT id from client_details where client_id = 'bilirubin_chart'), 'launch'),
  ((SELECT id from client_details where client_id = 'bilirubin_chart'), 'patient/Patient.read'),
  ((SELECT id from client_details where client_id = 'bilirubin_chart'), 'patient/Observation.read'),
  ((SELECT id from client_details where client_id = 'bilirubin_chart'), 'patient/Observation.write'),
  ((SELECT id from client_details where client_id = 'bilirubin_chart'), 'patient/*.*');

INSERT INTO client_grant_type (owner_id, grant_type) VALUES
  ((SELECT id from client_details where client_id = 'bilirubin_chart'), 'authorization_code');

COMMIT;

SET AUTOCOMMIT = 1;
