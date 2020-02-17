const dotRadius = 10;
let nodeId = 1;

function nodeGen(id) {
    return `<div class='dropdown' id='drop-${id}'><div class="name btn">Node ${id}</div><div class="btn delete">Usuń</div></div>`
}

$(function () {
    console.log("ready!");

    $("#imageCanvas").click(function (e) {
        var offset = $(this).offset();
        var relX = e.pageX - offset.left;
        var relY = e.pageY - offset.top;
        console.log(relX, relY);
        var node = $(`<div class='node' style='top: ${relY - dotRadius}px; left: ${relX - dotRadius}px'></div>`);
        var menu = nodeGen(nodeId);

        $(this).parent().append(node);
        $(node).append(menu);
        $("#drop-" + nodeId + " .delete").click(function (e) {
            console.log(e);
            $(this).parent().parent().remove();
        });

        nodeId++;
    })
});