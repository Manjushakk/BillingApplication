import React, { useRef } from 'react'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useSelector } from 'react-redux'


const GenerateBill = (props) => {

    const pdfExportComponent = useRef(null)

   
    const {_id, lineItems, total, customer} = props

    
    
        const customers = useSelector((state) => {

            return state.customers
        })

        
        const products = useSelector((state) => {

            return state.products
        })

        const cart = useSelector((state) => {

            return state.cart
        })
        const customerName = customers.map((ele) => {

            if(ele._id === customer){
        
                return ele.name
            }
        })

        const handleGenerateBill = () => {

            pdfExportComponent.current.save()
          
            console.log('button clicked')
        }
       
        return(
      
            <div div class="card" >
                <div class="card-body">
                <h5 class="card-title">Invoice</h5>
            <PDFExport ref = {pdfExportComponent} paperSize = "A4">      
            <p>Invoice ID: {_id}</p>
            <p>Customer Name: {customerName}</p>

            <table className = "table " >
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
                </tr>
            

            {products.map((ele) => {

                 return lineItems.map((line, i) => {

                    if(ele._id === line.product){

                        return(
                            <tr key = {line.product}>
                                <td>{i+1}</td>
                                <td>{ele.name}</td>
                                <td>{line.quantity}</td>
                                <td>INR {line.subTotal}</td>
                            </tr>)
                             
                    }
                })
            })}

            </table>
           
            <p>Total({cart.length} items ): INR {total} </p> 
        </PDFExport>
         <button class="btn btn-primary"  onClick = {handleGenerateBill}>Print Bill</button>
         </div>
         </div>
      
 
    
        
    )

  
}

export default GenerateBill