let currentPhoto = 0;

  let imagesData = [
    {
    photo: "images/1400-hp-pontiac-firebird-trans-am.jpg",
    title: "Pontiac Firebird",
    description: "The Pontiac Firebird is an American automobile that was built and produced by Pontiac from the 1967 to 2002 model years. Designed as a pony car to compete with the Ford Mustang, it was introduced on February 23, 1967, five months after GM's Chevrolet division's platform-sharing Camaro."
    },
    {
    photo: "images/1970-plymouth-hemi-cuda_3341.jpg",
    title: "Plymouth Barracuda",
    description: "The Plymouth Barracuda is a two-door pony car that was manufactured by Chrysler Corporation from 1964 through 1974 model years. The first-generation Barracuda was based on the Chrysler A-body and was offered from 1964 until 1966."
    },
    {
    photo: "images/dodge-challenger-ta-front-three-quarter.jpg",
    title: "Dodge Challenger",
    description: "The Dodge Challenger is the name of three different generations of automobiles (two of those being pony cars) produced by American automobile manufacturer Dodge. However, the first use of the Challenger name by Dodge was in 1959 for marketing a 'value version' of the full-sized Coronet Silver Challenger."
    },
    {
    photo: "images/fb88c644.png",
    title: "Chevrolet Camaro SS",
    description: "The Chevrolet Camaro is a mid-size American automobile manufactured by Chevrolet, classified as a pony car. It first went on sale on September 29, 1966, for the 1967 model year and was designed to compete with the Ford Mustang."
    },
    {
    photo: "images/Ford-Mustang-Mach-1-4-1024x614.jpg",
    title: "Ford Mustang Mach 1",
    description: "The Ford Mustang Mach 1 is a performance-oriented option package of the Ford Mustang muscle car, originally introduced in August 1968 for the 1969 model year. It was available until 1978, returned briefly in 2003, 2004, and most recently in 2021."
    },
    {
    photo: "images/Kevins_RT_NZV8-58.jpg",
    title: "Dodge Charger",
    description: "The Dodge Charger is a model of automobile marketed by Dodge in various forms over seven generations since 1966. The first Charger was a show car in 1964. A 1965 Charger II concept car resembled the 1966 production version."
    },
    {
    photo: "images/this-duramax-powered-1970-chevy-chevelle-is-an-environmentalist-s-worst-nightmare-216673_1.jpg",
    title: "Chevrolet Chevelle SS",
    description: "The Chevrolet Chevelle is a mid-sized automobile that was produced by Chevrolet in three generations for the 1964 through 1978 model years. Part of the General Motors (GM) A-body platform, the Chevelle was one of Chevrolet's most successful nameplates."
    }
  ]
  
  //$("#photo").attr("src", imagesData[currentPhoto].photo);

  let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $("#photo-title").empty().append(imagesData[photoNumber].title);
    $("#photo-description").empty().append(imagesData[photoNumber].description);
  }
    loadPhoto(currentPhoto);
  
  $('#toRight').click(() => {
    if(currentPhoto < imagesData.length) {
    currentPhoto++;
    }
    else {currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
  })

  $('#toLeft').click(() => {
    if(currentPhoto >= 1) {
    currentPhoto--;
    }
    else {currentPhoto = imagesData.length;
    }
    loadPhoto(currentPhoto);
  })

  