
const bcrypt = require('bcrypt')
import formatear from "../utils/formatear"
import { verifiDBNull, verOpen } from '../../functions/env'
import publicacionService from "../services/publicacionService";
import favoritoService from "../services/favoritoService"


const  data =(req, res)=>{        
    publicacionService.data(req.params.page,req.params.num,req.params.prop,req.params.value)
    .then((rows)=>{            
        res.status(200).send({message: "lista publicacions", result: rows})
    })
    .catch((reason)=>{
        console.log(reason)
        res.status(400).send({message: reason})
    })
}

const  search =(req,res)=>{
    const {prop, value } = req.body                
    let newValue = verifiDBNull(value)
    publicacionService.search(prop,newValue)
    .then((rows)=>{
        console.log(rows)
        res.status(200).send({result: rows})
    })
    .catch((reason)=>{            
        res.status(400).send({message: reason})
    })
}

const  create=(req, res)=>{       
     publicacionService.create(req.body)
     .then((row)=>{            
        res.status(200).send({message: "publicacion registrado",result:row})
        
       })  
      .catch((reason) => {
             console.log(reason)
            res.status(400).send({ message: reason });
       });                       
}

const  update=(req, res)=>{        
    const { clienteId} = req.body     
        publicacionService.update(req.body,req.params.id)
        .then((row)=>{            
            publicacionService.data(1,12,clienteId,clienteId)
            .then((rows)=>{            
                res.status(200).send({message: "lista publicacions", result: rows})
            })
            .catch((reason) => {                
            res.status(400).send({ message: reason });
          });                        
        })
        .catch((reason)=>{     
            console.log(reason)       
            res.status(400).send({message: reason})
        })               
}

const  item=(req, res)=>{            
    publicacionService.item(req.params.id)
    .then((xrow) => {         
        res.status(200).send({message: "publicacion item",result: xrow})                           
    })
    .catch((reason) => {  
        console.log(reason)          
        res.status(400).send({ message: reason });
    });                                
}

const  consulta=(req, res)=>{           
    
    publicacionService.consulta(req.params.tipo,req.params.contrato,req.params.ciudad,req.params.moneda,req.params.irango,req.params.frango)
    .then((xrow) => {                 
        res.status(200).send({message: "publicacion item",result: xrow})                           
    })
    .catch((reason) => {  
        console.log(reason)          
        res.status(400).send({ message: reason });
    });                                
}

const  last=(req, res)=>{               
    publicacionService.last(req.params.ciudad)
    .then((xrow) => {                 
        res.status(200).send({message: "publicacion item",result: xrow})                           
    })
    .catch((reason) => {  
        console.log(reason)          
        res.status(400).send({ message: reason });
    });                                
}

const  consultaItem=(req, res)=>{            
    publicacionService.item(req.params.id)
    .then((item) => { 
        /*const item = xitem
        item.telefono = xitem.cliente.telefono       
        item.celular = xitem.cliente.celular*/

    const imagenes = [
        {id:0,imgUrl:'/static/images/f1/md/'+item.filename1},
        {id:1,imgUrl:'/static/images/f2/md/'+item.filename2},
        {id:2,imgUrl:'/static/images/f3/md/'+item.filename3},
        {id:3,imgUrl:'/static/images/f4/md/'+item.filename4},
    ]       
    res.status(200).send({message: "publicacion item",result: { item,imagenes}})                           
    })
    .catch((reason) => {  
        console.log(reason)          
        res.status(400).send({ message: reason });
    });                                
}

const consultaAll=(req, res)=>{               
    publicacionService.consultaAll(req.params.page,req.params.num)
    .then((xrow) => {                 
        res.status(200).send({message: "publicacion item",result: xrow})                           
    })
    .catch((reason) => {  
        console.log(reason)          
        res.status(400).send({ message: reason });
    });                                
}



module.exports={    
    data,
    search,
    create,
    update,
    item,  
    consultaItem,
    consulta,
    consultaAll,
    last  
}