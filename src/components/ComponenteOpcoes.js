import { useState } from 'react';
 
export default function CompoProcesso() {

    const [section, setSection] = useState(null);

    const renderSection = () => {
      if (section === 'partido') {
        return (
          <div className='container'>
            <br/>
            <h2>Registrar Partido</h2>

            <br></br> 

            <form>
                     <div  className="form-group row">
                     <label className="col-sm-2 col-form-label">Nome</label>
                        <div className='col-sm-10' > 
                            <input  className="form-control" type="text" />
                         </div>
                     </div>

                     <br></br>

                    <div className='form-group'>
                    <button className="btn btn-success" type="submit"> Registrar partido!</button>
                    </div>
                
            </form>
        
          </div>
        );
      } else if (section === 'eleitores') {
        return (
          <div>
            <br></br>
            <h2>Registrar Eleitores</h2>
                <form >
                   <div  className="form-group row" >
                        <label className="col-sm-2 col-form-label">Nome</label>
                        

                        <div className='col-sm-10'>
                        <input  className="form-control" type="text" />
                        </div>
                    </div>

                    <div className="form-group row" > 
                        <label className="col-sm-2 col-form-label">Bi</label>
                        
                        <div className='col-sm-10' > 
                            <input  className="form-control" type="text" />
                         </div>
                    </div>

                       <br></br>
    
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" for="foto do eleitor">Foto do eleitor</label>
                         <div  className='col-sm-10' >
                                <input type="file" class="form-control-file" id="foto do eleitor"/>
                         </div>
                    </div>


                    <br></br>

                    <div className="form-group" >

                    <button className="btn btn-success" type="submit">
                       Registrar eleitor!
                    </button>

                    </div>
    
                   
                </form>
          </div>
        );
      } else if (section === 'candidatos') {
        return (
          <div>

                <br></br>
                <br></br>
            <h2>Registrar Candidatos</h2>

                <br></br>
                <br></br>
                <form>

                    <div className="form-group row">
                       
                        <label className="col-sm-2 col-form-label">Nome</label>
                        <div className='col-sm-10' > 
                            <input  className="form-control" type="text" />
                         </div>

                         <br></br>
                         <br></br>
                              

                        <div className="form-group row" > 
                            <label className="col-sm-2 col-form-label">Partido</label>
                                <div className='col-sm-10' > 
                                    <input  className="form-control" type="text" />
                                </div>
                       </div>

                       <br></br>
                       <br></br>

                       <div className="form-group row">
                            <label className="col-sm-2 col-form-label" for="foto do eleitor">Foto do candidato</label>
                            <div  className='col-sm-10' >
                                    <input type="file" class="form-control-file" id="foto do eleitor"/>
                            </div>
                        </div>

                       <div> <button className="btn btn-success" type="submit">
                        Registrar candidato!
                        </button></div>  
                    </div>
                    
                </form>
          </div>
        );
      } else {
    
        return (
            <div className="form">
                <br></br>
                <br></br>
                <div>
                    <h1>Processo de Eleições</h1>

                    <br></br>
                    <br></br>
                    <br></br>

                    
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Opções</th> 
                        
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            
                            <td><button onClick={() => setSection('partido')} >Registros de Partidos</button></td>
                            
                            
                            </tr>
                            <tr>
                            
                            <td><button onClick={() => setSection('eleitores')}>Registro dos eleitores</button></td>
                        
                            
                            </tr>
                            <tr>
                            
                            <td colspan="2"><button onClick={() => setSection('candidatos')}>Registro dos candidatos</button></td>
                            
                            </tr>
                        </tbody>
                    </table>

                </div>
    
            </div>
        );
    }
}

return <div className="form">{renderSection()}</div>;


}