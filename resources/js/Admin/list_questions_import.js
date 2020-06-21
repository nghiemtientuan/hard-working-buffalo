$('#fileImportQuestion').on('change', function (e) {
    const files = e.target.files;
    if (files && files.length) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(files[0]);
        reader.onload = function (e) {
            let data = new Uint8Array(reader.result);
            let wb = XLSX.read(data, {type: 'array'});

            let htmlstr = XLSX.write(wb, {type:'binary'});

            console.log(htmlstr);
        }
    }
});
