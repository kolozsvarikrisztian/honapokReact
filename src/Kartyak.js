

function Kartyak() {
    return (
        <div id="kartyak">
            {honapok.map((honap, ix) => (
                <Kartya key={ix} honap={honap} />
            ))}
        </div>
    )
};

function Kartya({honap}) {
    let evszak = '';
    if (honap.name === 'szeptember') {
        evszak = 'osz';
    }
    else if (honap.name === 'december') {
        evszak = 'tel';
    }
    else if (honap.name === 'március') {
        evszak = 'tavasz';
    }
    else if (honap.name === 'június') {
        evszak = 'nyar';
    }
    return (
        <div className="kartya" id={evszak}>
          <img src={honap.photoUrl} alt={honap.name +"i kép"} />
          <h2>{honap.name}</h2>
          <p>{honap.leiras}</p>
          <a href="">Bővebben</a>
        </div>
    )
}

export default Kartyak


const honapok = [
    {
        name: "szeptember",
        evszak: "osz",
        photoUrl: "./img/szeptember.jpg",
        leiras: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "október",
        evszak: "osz",
        photoUrl: "./img/oktober.jpg",
        leiras: "In sodales lobortis venenatis."
    },
    {
        name: "november",
        evszak: "osz",
        photoUrl: "./img/november.jpg",
        leiras: "Fusce sodales diam volutpat nulla finibus vulputate."
    },
    {
        name: "december",
        evszak: "tel",
        photoUrl: "./img/december.jpg",
        leiras: "Fusce dui enim, consequat ac auctor sit amet, mattis eget odio."
    },
    {
        name: "január",
        evszak: "tel",
        photoUrl: "./img/januar.jpg",
        leiras: "Morbi venenatis hendrerit diam, sit amet feugiat nisi convallis eu."
    },
    {
        name: "február",
        evszak: "tel",
        photoUrl: "./img/februar.jpg",
        leiras: "Nunc auctor augue nec accumsan lacinia."
    },
    {
        name: "március",
        evszak: "tavasz",
        photoUrl: "./img/marcius.jpg",
        leiras: "Pellentesque aliquam luctus eros a tincidunt."
    },
    {
        name: "április",
        evszak: "tavasz",
        photoUrl: "./img/aprilis.jpg",
        leiras: "Vivamus dolor turpis, lobortis eu sagittis sit amet, posuere nec justo."
    },
    {
        name: "május",
        evszak: "tavasz",
        photoUrl: "./img/majus.jpg",
        leiras: "Sed volutpat tortor sed nunc blandit, vel rutrum erat rhoncus."
    },
    {
        name: "június",
        evszak: "nyar",
        photoUrl: "./img/junius.jpg",
        leiras: "Nulla erat enim, lobortis et metus vitae, porttitor pharetra arcu."
    },
    {
        name: "július",
        evszak: "nyar",
        photoUrl: "./img/julius.jpg",
        leiras: "Duis in lacus in erat imperdiet euismod vitae et massa."
    },
    {
        name: "augusztus",
        evszak: "nyar",
        photoUrl: "./img/augusztus.jpg",
        leiras: "Maecenas quis placerat risus, eu blandit nunc."
    },
]