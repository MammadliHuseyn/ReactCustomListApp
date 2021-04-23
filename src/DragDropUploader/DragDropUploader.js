import React from "react";
import { useState, useEffect } from "react"
import UploadedImage from "../UploadedImage";
import uuid from "react-uuid";







const DragDropUploader = (props) => {

    const [FileList, SetFileList] = useState([]);

    const addFiles = (files) => {

        for (const i of files) {
            let fr = new FileReader();
            if (i && i.type.match('image.*')) {
                fr.readAsDataURL(i);
            }
            fr.onloadend = (e) => {
                SetFileList(prevState => [...prevState, { id: uuid(), src: fr.result.toString() }])
            }
        }
    }

    const onFileLoad = (e) => {
        e.preventDefault();
        const files = e.currentTarget.files;
        addFiles(files);
    }

    const deleteFile = (id) => {
        SetFileList(FileList.filter(x => x.id !== id));
    }

    const dragOver = function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    }

    const dragLeave = function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    }

    const drop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
        addFiles(e.dataTransfer.files);
    }

    useEffect(() => {
        const dragArea = document.getElementById("dragArea");
        dragArea.addEventListener('dragover', dragOver, false)
        dragArea.addEventListener('dragleave', dragLeave, false)
        dragArea.addEventListener('drop', drop, false)
    })



    return <div className="drag-area drag-leave" id="dragArea">
        <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
        <header>Drag & Drop to Upload File</header>
        <span>OR</span>
        <button className="btn-browse" onClick={() => { document.getElementById("input-file").click() }}>Browse File</button>
        <input
            id="input-file"
            type="file"
            onChange={onFileLoad.bind(this)}
            multiple
            hidden
        />


        <div className="drag-drop-area mt-2">
            {FileList.map((item) => {
                return <UploadedImage src={item.src} delete={() => deleteFile(item.id)} key={uuid()} />
            })}
        </div>
    </div>



}

export default DragDropUploader;