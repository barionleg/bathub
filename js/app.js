// ************************************************  ON START INIT 

const armButtons = blist => {
    blist.forEach(element => {
        const button = $('<li/>')
        .attr('id',element.id)
        .on('mousedown',()=>{window.location.href=element.url})
        .html(`<h2>${element.name}</h2>${element.desc}`)
        .css('background-color',element.color)
        $('#apps').append(button);
    });
}


$(document).ready(function () {

    armButtons([
        { name:'CutAs', desc:'binary file manipulation and export', url:'https://bocianu.gitlab.io/cutas/', color:'#030'  },
        { name:'FiDL', desc:'display list editor', url:'https://bocianu.gitlab.io/fidl/', color: '#193237'  },
        { name:'SprEd', desc:'hardware sprite editor<br>PMG', url:'https://bocianu.gitlab.io/spred/', color: '#462e20'  },
        { name:'Sprite XL', desc:'software sprite editor', url:'https://mimuma.pl/atari/SpriteEditorXL/', color: '#577889'  },
    ])



});