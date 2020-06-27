const API_URL = "https://rocky-atoll-47623.herokuapp.com/rest"

export function checkCodeResult(zipFile, resultFile) {
  var body = new FormData();
  body.append('zip',zipFile )
  body.append('resultFile',resultFile )
  return fetch(`${API_URL}/zip`, {
    method: 'POST',
    body
  }).then(async res => {
    return await res.json();
  })
}

export function checkCodeWithMainResult(mainJavaFile, zipFile, resultFile) {
  var body = new FormData();
  body.append('mainJavaFile',mainJavaFile )
  body.append('zip',zipFile )
  body.append('resultFile',resultFile )
  return fetch(`${API_URL}/main/zip`, {
    method: 'POST',
    body
  }).then(async res => {
    return await res.json();
  })
}