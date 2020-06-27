import React, {useState} from 'react';
import Dropzone from "react-dropzone";
import { checkCodeWithMainResult } from '../service/CodeParserApi';


function WithMain() {
  var zipFile, resultFile, mainJavaFile;
  const [response, setResponse] = useState('');
  const handleDrop = acceptedFiles =>{
    
  acceptedFiles.map(file => {
    if(file.name.includes("java")) mainJavaFile = file
     if(file.name.includes("zip")) zipFile = file
     if(file.name.includes("txt")) resultFile = file
  })
    // setFileNames(droppedFiles);
    checkCodeWithMainResult(mainJavaFile, zipFile, resultFile).then(res => {
      setResponse(res)
    })
  }

  return (
       <div>
          <ul className = "note">
           <li>
             Teacher should prepare empty project with testing Main class <b>with testing class</b>
             <pre className = "numberNote">
               1. Empty Project with expected classes and values <br/>
               2. Prepare expected output and save it to <b>.txt</b> file format <br/>
                  Every line have to be with template: <b>{"{"}expectedOuputLine{"}"}-point-{"{"}givenPoint{"}"}</b><br/>
                  <b><i>For example</i></b>: The output 35+7=42, given point 0.15 <br />
                  {"             "}35+7=42-point-0.15 <br/>
               3. Another testing file to check Student task with another values
             </pre>
           </li>
           <li>
             Student will do the task and upload with <b>.zip format</b>
           </li>
           <li>
              And drop <br/> 
             <pre className = "numberNote">
             1. Project .zip file of student <br/>
             2. Expected Result .txt(or some another text format file) file<br/>
             3. Test.java file with main class
             </pre>
           </li>
         </ul>
          <Dropzone
       onDrop={files => handleDrop(files)}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
        }) => {
          const additionalClass = isDragAccept
            ? "accept"  
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`
              })}
            >
              <input {...getInputProps()} />
              <span>{isDragActive ? "📂" : "📁"}</span>
              <p>Drag'n'drop zip, main .class with test and expected output .txt file</p>
            </div>
          );
        }}
      </Dropzone>
      {
        response !== '' && 
        <div className = "dropDiv">
           <div className = "droppedFiles">
           <p> Student Name: {response.studentName} </p>
           </div>
           <div className = "droppedFiles">
           <p>Result Point: {response.totalResult}% </p>
           </div>
           <div className="tagResult">{
           response.resultConsole.split('\n').map((item, i) => {
            return <p key={i}>> {item}</p>;
                })
           }</div>
         
        </div>
      }
      </div>
  );
}

export default WithMain;