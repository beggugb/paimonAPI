
const bcrypt = require('bcrypt')
import formatear from "../utils/formatear"
import { verifiDBNull, verOpen } from '../../functions/env'
import clienteService from "../services/clienteService";


    const  dataClientes =(req, res)=>{        
        clienteService.data(req.params.page,req.params.num,req.params.prop,req.params.value)
        .then((rows)=>{            
            res.status(200).send({message: "lista clientes", result: rows})
        })
        .catch((reason)=>{
            console.log(reason)
            res.status(400).send({message: reason})
        })
    }

    const  searchCliente =(req,res)=>{
        const {prop, value } = req.body                
        let newValue = verifiDBNull(value)
        clienteService.search(prop,newValue)
        .then((rows)=>{
            console.log(rows)
            res.status(200).send({result: rows})
        })
        .catch((reason)=>{            
            res.status(400).send({message: reason})
        })
    }

    const  saveCliente=(req, res)=>{       
         clienteService.create(req.body)
         .then((row)=>{            
            res.status(200).send({message: "cliente registrado",result:row})
            
           })  
          .catch((reason) => {
                 console.log(reason)
                res.status(400).send({ message: reason });
           });                       
    }

    const  setUpdate=(req, res)=>{             
            clienteService.update(req.body,req.params.id)
            .then((row)=>{            
               clienteService.item(req.params.id)
                .then((xrow) => { 
                    res.status(200).send({message: "cliente actualizado",result:xrow})               
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

    const  getItem=(req, res)=>{            
        clienteService.item(req.params.id)
        .then((xrow) => {         
            res.status(200).send({message: "cliente item",result: xrow})                           
        })
        .catch((reason) => {  
            console.log(reason)          
            res.status(400).send({ message: reason });
        });                                
    }

    

    const  getItems =(req,res)=>{
        clienteService.items()
        .then((rows)=>{
            res.status(200).send({result: rows})
        })
        .catch((reason)=>{        
            res.status(400).send({message: reason})
        })    
    }
    /** Consultas */
    
    const getSearch = (req, res) =>{ 
        var dias =["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]
        var dayName = dias[new Date().getDay()];         
        const { page,num,categoria,nombre,latitude, longitude } = req.body    
        clienteService.getSearch(page,num,categoria,nombre,dayName)                
          .then((clientes) => {
            const dato = formatear.unificar(clientes.data,latitude,longitude) 
            res.status(200).send({ result: {paginas: clientes.paginas,pagina:clientes.pagina,total:clientes.total,data:dato }});
               
            })                     
          .catch((reason) => {
              console.log(reason)
            res.status(400).send({ reason });
          });
    }  
    
    const  getDetalle=(req, res)=>{  
        var dias =["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]
        var dayName = dias[new Date().getDay()];          
        
        clienteService.itemDetalle(req.params.id,dayName)
        .then((xitem) => {  
            let newItem = xitem.horario
            let r = xitem.horario.tipo !== 'horario' ? xitem.horario.tipo: verOpen(xitem.hinicio,xitem.hfin)                        
            newItem.estado = r
            
            let nView = {
                views : parseInt(xitem.views) + 1
            }
            clienteService.update(nView,req.params.id)
            .then((tt)=>{
                res.status(200).send({message: "cliente actualizado",result: { item:xitem }})                           
            })
            .catch((reason) => {  
                console.log(reason)          
                res.status(400).send({ message: reason });
            });
            
        })
        .catch((reason) => {  
            console.log(reason)          
            res.status(400).send({ message: reason });
        });                                
    }


  

module.exports={    
    dataClientes,
    searchCliente,
    saveCliente,
    setUpdate,
    getItem,
    getDetalle,
    getItems,    
    getSearch    
}