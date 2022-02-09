let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    // number of slides per carousel-item
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

function togglePopup()
{
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup_2()
{
    document.getElementById("popup-2").classList.toggle("active");
}


function showUplod()
{
    var idproof = document.getElementById("idprof").value;
    if(idproof == "passport")
    {
    document.getElementById("passportupload").style.display="flex"
    document.getElementById("adharupload").style.display="none"
    document.getElementById("voteridupload").style.display="none"
    }
    else if(idproof == "Voter Id")
    {
        document.getElementById("voteridupload").style.display="flex"
        document.getElementById("adharupload").style.display="none"
        document.getElementById("passportupload").style.display="none"

    }
    else if(idproof == "Aadhar Card")
    {
        document.getElementById("adharupload").style.display="flex"
        document.getElementById("passportupload").style.display="none"
        document.getElementById("voteridupload").style.display="none"

    }
    else
    {
        document.getElementById("adharupload").style.display="none"
        document.getElementById("passportupload").style.display="none"
        document.getElementById("voteridupload").style.display="none"
    }
}
    // if(a==1)
    // {
    //     document.getElementById("uploaddcmnt").style.display="inline"
    //     return a=0;
    // }
    // else
    // {
    //     document.getElementById("uploaddcmnt").style.display="none"
    //     return a=1;
    // }
