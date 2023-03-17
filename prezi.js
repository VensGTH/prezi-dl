const generatePDF = async (name, file) => {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('l', 'in', [10, 5.625]);
    var width = doc.internal.pageSize.width;
    var height = doc.internal.pageSize.height;
    const roundN = (number) => Math.round(number * 100 + Number.EPSILON) / 100;

    for (let i = 0; i < file.length; i++) {
        //await delay(2000);
        console.log(`Downloading slide ${i + 1}/${file.length}`);
        await doc.addImage(file[i], 'PNG', 0, 0, 10, 5.625);
        const progress = (i + 1) / file.length;

        if (i !== file.length - 1) doc.addPage();
    };

    try {
        await doc.save(`${name}.pdf`);
        $.notify("Download completed..", {
            className: "success",
            autoHideDelay: 3000,
        });
        $('.dl-button').removeClass('disabled');
    } catch (err) {
        console.log(err);
        $('.dl-button').removeClass('disabled');
    };
}

async function genDL() {
    const path = window.location.pathname;
    const regex = path.match(new RegExp("[0-z]{12}"));
    const id = regex ? regex[0] : false;
    if (id) {
        $('.dl-button').addClass('disabled');
        $.notify("Generating pdf file..", {
            className: "info",
            clickToHide: true,
            //autoHideDelay: 5000,
        });
        await dl_presentation(id);
    }
}

async function dl_presentation(id) {
    let file = [];
    await fetch(`https://prezi.com/api/v2/storyboard/frames/${id}/`).then((resp) => {
        resp.json().then(async (data) => {
            const frames = data['frames'];
            frames.forEach(frame => {
                file.push(frame['images'][0]['urls']['png']);
            });
            await generatePDF(id, file);
        });
    });
}

function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
};
