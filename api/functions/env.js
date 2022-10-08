/*const dataSites = [
    {
      "city": "Santa Cruz", 
      "lat": "-17.7892", 
      "lng": "-63.1975", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Santa Cruz", 
      "capital": "admin", 
      "population": "3151676", 
      "population_proper": "3151676"
    }, 
    {
      "city": "La Paz", 
      "lat": "-16.4942", -- 16.60
      "lng": "-68.1475", -- 68.20
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "La Paz", 
      "capital": "primary", 
      "population": "2867504", 
      "population_proper": "2867504"
    }, 
    {
      "city": "Cochabamba", 
      "lat": "-17.3935", 
      "lng": "-66.1570", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Cochabamba", -- 17.48
      "capital": "admin",         -- 66.20
      "population": "632013", 
      "population_proper": "632013"
    }, 
    {
      "city": "Sucre", 
      "lat": "-19.0431", 
      "lng": "-65.2592", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Chuquisaca", 
      "capital": "primary", 
      "population": "300000", 
      "population_proper": "300000"
    }, 
    {
      "city": "Oruro", 
      "lat": "-17.9667", 
      "lng": "-67.1167", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Oruro", 
      "capital": "", 
      "population": "264683", 
      "population_proper": "264683"
    }, 
    {
      "city": "Oruro", 
      "lat": "-17.9800", 
      "lng": "-67.1300", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Oruro", 
      "capital": "admin", 
      "population": "246501", 
      "population_proper": "208684"
    }, 
    {
      "city": "Warnes", 
      "lat": "-17.5103", 
      "lng": "-63.1647", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Santa Cruz", 
      "capital": "", 
      "population": "214216", 
      "population_proper": "214216"
    }, 
    {
      "city": "Potosí", 
      "lat": "-19.5833", 
      "lng": "-65.7500", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Potosí", 
      "capital": "admin", 
      "population": "189652", 
      "population_proper": "189652"
    }, 
    {
      "city": "Tarija", 
      "lat": "-21.5317", 
      "lng": "-64.7311", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Tarija", 
      "capital": "admin", 
      "population": "179528", 
      "population_proper": "179528"
    }, 
    {
      "city": "Sacaba", 
      "lat": "-17.4042", 
      "lng": "-66.0408", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Cochabamba", 
      "capital": "", 
      "population": "172466", 
      "population_proper": "172466"
    }, 
    {
      "city": "Quillacollo", 
      "lat": "-17.3975", 
      "lng": "-66.2817", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Cochabamba", 
      "capital": "", 
      "population": "137182", 
      "population_proper": "137182"
    }, 
    {
      "city": "Montero", 
      "lat": "-17.3333", 
      "lng": "-63.3833", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Santa Cruz", 
      "capital": "", 
      "population": "112837", 
      "population_proper": "112837"
    }, 
    {
      "city": "Trinidad", 
      "lat": "-14.8333", 
      "lng": "-64.9000", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "El Beni", 
      "capital": "admin", 
      "population": "101454", 
      "population_proper": "101454"
    }, 
    {
      "city": "Riberalta", 
      "lat": "-10.9830", 
      "lng": "-66.1000", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "El Beni", 
      "capital": "", 
      "population": "74014", 
      "population_proper": "74014"
    }, 
    {
      "city": "Villa Tunari", 
      "lat": "-16.9725", 
      "lng": "-65.4200", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Cochabamba", 
      "capital": "", 
      "population": "71386", 
      "population_proper": "71386"
    }, 
    {
      "city": "Puerto Villarroel", 
      "lat": "-16.8667", 
      "lng": "-64.7831", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Cochabamba", 
      "capital": "", 
      "population": "46627", 
      "population_proper": "46627"
    }, 
    {
      "city": "Cobija", 
      "lat": "-11.0183", 
      "lng": "-68.7537", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Pando", 
      "capital": "admin", 
      "population": "46267", 
      "population_proper": "46267"
    }, 
    {
      "city": "Villamontes", 
      "lat": "-21.2647", 
      "lng": "-63.4586", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Tarija", 
      "capital": "", 
      "population": "39800", 
      "population_proper": "39800"
    }, 
    {
      "city": "Guayaramerín", 
      "lat": "-10.8267", 
      "lng": "-65.3567", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "El Beni", 
      "capital": "", 
      "population": "36008", 
      "population_proper": "36008"
    }, 
    {
      "city": "Camiri", 
      "lat": "-20.1000", 
      "lng": "-63.5333", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Santa Cruz", 
      "capital": "", 
      "population": "33838", 
      "population_proper": "33838"
    }, 
    {
      "city": "Tiquipaya", 
      "lat": "-17.3381", 
      "lng": "-66.2189", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Cochabamba", 
      "capital": "", 
      "population": "31264", 
      "population_proper": "31264"
    }, 
    {
      "city": "Viacha", 
      "lat": "-16.6333", 
      "lng": "-68.2833", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "La Paz", 
      "capital": "", 
      "population": "29108", 
      "population_proper": "29108"
    }, 
    {
      "city": "Bermejo", 
      "lat": "-22.7322", 
      "lng": "-64.3425", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Tarija", 
      "capital": "", 
      "population": "28285", 
      "population_proper": "28285"
    }, 
    {
      "city": "Llallagua", 
      "lat": "-18.4231", 
      "lng": "-66.5856", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Potosí", 
      "capital": "", 
      "population": "28069", 
      "population_proper": "28069"
    }, 
    {
      "city": "Villazón", 
      "lat": "-22.0910", 
      "lng": "-65.5960", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Potosí", 
      "capital": "", 
      "population": "28045", 
      "population_proper": "28045"
    }, 
    {
      "city": "Camiri", 
      "lat": "-20.0500", 
      "lng": "-63.5200", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Santa Cruz", 
      "capital": "", 
      "population": "27961", 
      "population_proper": "10464"
    }, 
    {
      "city": "Uyuni", 
      "lat": "-20.4627", 
      "lng": "-66.8240", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Potosí", 
      "capital": "", 
      "population": "26958", 
      "population_proper": "26958"
    }, 
    {
      "city": "San Borja", 
      "lat": "-14.8583", 
      "lng": "-66.7475", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "El Beni", 
      "capital": "", 
      "population": "24610", 
      "population_proper": "24610"
    }, 
    {
      "city": "San Ignacio de Velasco", 
      "lat": "-16.3667", 
      "lng": "-60.9500", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Santa Cruz", 
      "capital": "", 
      "population": "23569", 
      "population_proper": "23569"
    }, 
    {
      "city": "Tupiza", 
      "lat": "-21.4423", 
      "lng": "-65.7190", 
      "country": "Bolivia", 
      "iso2": "BO", 
      "admin_name": "Potosí", 
      "capital": "", 
      "population": "23100", 
      "population_proper": "23100"
    }
  ]*/
export const verifiDBEmpty = (params) =>{
    if(params === "" || params === 0 || params === '0' || params === "0" || params === undefined )
    {
        return 0
    }else{
        return params
    }
}
export const verifiDBNull = (params) =>{
    if(params === '--todos--' || params === null || params === '' || params === 0 || params === '0' || params === undefined )
    {
        return '%'
    }else{
        return '%'+params+'%'
    }
}

export const verifiDBNulls = (params) =>{
    if(params === '--todos--' || params === null || params === '' || params === 0 || params === '0' || params === undefined )
    {
        return '0'
    }else{
        return '%'+params+'%'
    }
}

export const isNUll = (dato) =>{
    if(dato){
        return dato
    }else{
        return 0
    }
}
export const isNUllArray = (data) =>{
    if(data){
        return data
    }else{
        return []
    } 
}

export const verOpen = (hinicio,fin) =>{
    let fechaHoy = new Date();   

    const [hours] = hinicio.split(':');
    let hora   = parseInt(fechaHoy.getHours())        
    let ihora   = parseInt(hours)    

    const [fours] = fin.split(':');    
    let fhora = parseInt(fours)
    console.log(hora)

    if(hora >= ihora && hora <= fhora ){
        return 'ABIERTO'
    }else{
        return 'CERRADO'
    }      
}


export const getDistanceBetweenPoints = (lat1, lng1, lat2, lng2) =>{
  // El radio del planeta tierra en metros.
  let R = 6378137;
  let dLat = degreesToRadians(lat2 - lat1);
  let dLong = degreesToRadians(lng2 - lng1);
  let a = Math.sin(dLat / 2)
          *
          Math.sin(dLat / 2) 
          +
          Math.cos(degreesToRadians(lat1)) 
          * 
          Math.cos(degreesToRadians(lat1)) 
          *
          Math.sin(dLong / 2) 
          * 
          Math.sin(dLong / 2);

  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let distance = R * c;

  return distance;
}
function degreesToRadians(degrees){
  return degrees * Math.PI / 180;
}



