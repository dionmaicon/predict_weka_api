'use strict';
var fs = require('fs');
const { exec } = require('child_process');

var j48Controller = {
  realize_prediction_with_model : function(req, res) {
    //not validate req
    let idade = req.body.idade;
    let sexo =  req.body.sexo;
    let febre_repentina = req.body.febre_repentina;
    let febre = req.body.febre;
    let duracao_febre = req.body.duracao_febre;
    let dor_articulacao = req.body.dor_articulacao;
    let inchaco_articulacao = req.body.inchaco_articulacao;
    let dor_de_cabeca = req.body.dor_de_cabeca;
    let dor_muscular = req.body.dor_muscular;
    let coceira = req.body.coceira;
    let manchas_vermelhas = req.body.manchas_vermelhas;
    let hipertrofia_ganglionar = req.body.hipertrofia_ganglionar;
    let conjuntivite = req.body.conjuntivite;


    let doc = "";
    doc = doc + "@relation Dengue_Chikungunya_Zika\n";
    doc = doc +"@attribute idade {'0-5', '6-14', '15-49', '50-99'}\n";
    doc = doc +"@attribute sexo {'masc','fem'}\n";
    doc = doc +"@attribute febre-repentina {'sim', 'nao'}\n";
    doc = doc +"@attribute febre {'37-37.9','38-40'}\n";
    doc = doc +"@attribute duracao-febre{'0-2','2-3','2-7'}\n";
    doc = doc +"@attribute dor-articulacao {'leve','moderada','intensa'}\n";
    doc = doc +"@attribute inchaco-articulacao{'sim', 'nao', 'raro'}\n";
    doc = doc +"@attribute dor-de-cabeca {'ausente','leve','moderada','intensa'}\n";
    doc = doc +"@attribute dor-muscular {'ausente','moderada', 'intensa'}\n";
    doc = doc +"@attribute coceira {'ausente','leve','moderada','intensa'}\n";
    doc = doc +"@attribute manchas-vermelhas {'sim','nao'}\n";
    doc = doc +"@attribute hipertrofia-ganglionar {'sim','nao'}\n";
    doc = doc +"@attribute conjuntivite {'sim', 'nao'}\n";
    doc = doc +"@attribute 'Class' {'dengue','zika', 'chikungunya'}\n";
    doc = doc +"@data\n";
    doc = doc + "'"+idade+"','"+sexo+"','"+febre_repentina+"','"+febre+"','"+duracao_febre+"','"+ dor_articulacao+"','"+inchaco_articulacao+"','"+ dor_de_cabeca +"','"+dor_muscular+"','"+coceira+"','"+ manchas_vermelhas +"','"+hipertrofia_ganglionar+"','"+conjuntivite+ "',? ";

    let set_test_path = "./files/j48/set_test.arff";

    fs.exists(set_test_path, function(exists){
       if(exists){ // results true
          fs.readFile(set_test_path, {encoding: "utf8"}, function(error, data){
             if(error){
               console.error("Read error: "+ error.message);
             }else{
                console.log("Read File Succes!"+ data);
             }
          })
       }
    });

    fs.writeFile(set_test_path, doc, function(error) {
         if (error) {
           console.error("write error:  " + error.message);
         } else {
           console.log("Successful Write to " + set_test_path);
         }
    });

  exec(`java -cp files/weka/weka.jar weka.classifiers.trees.J48 -l files/j48/j48_predict.model -T files/j48/set_test.arff -p 0`, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  let saida = stdout;
  let precision = stdout;
  let inicio = saida.length - 8;
  let fim = saida.length  - 3
  precision = precision.slice(inicio, fim);
  precision = precision  * 100;
  precision = precision +"%";

  let resultado;
  let diagnostico;

  resultado = saida.match(/zika/g);
  if(resultado != null){
        diagnostico = "Zica";
  }
  resultado = null;
  resultado = saida.match(/dengue/g);
  if(resultado != null){
         diagnostico = 'Dengue';
  }
  resultado = null;
  resultado = saida.match(/chikungunya/g);
  if(resultado != null){
          diagnostico = "Chikungunya";
  }

  res.json({message:  saida, result: diagnostico, prediction: precision});
  });
  },
  get_status_server : function(req, res) {
    var new_category = new Category(req.body);
    new_category.save(function(err, category) {
      if (err)
        res.send(err);
      res.json(category);
    });
  },
  read_a_history : function(req, res) {
    Category.findById(req.params.categoryId, function(err, category) {
      if (err)
        res.send(err);
      res.json(category);
    });
  },
  update_a_history : function(req, res) {
    Category.findOneAndUpdate({_id: req.params.categoryId}, req.body, {new: true}, function(err, category) {
      if (err)
        res.send(err);
      res.json(category);
    });
  },
  delete_a_history : function(req, res) {
    Category.remove({
      _id: req.params.categoryId
    }, function(err, category) {
      if (err)
        res.send(err);
      res.json({ message: 'Categoria deletada com sucesso' });
    });
  }
}
module.exports = j48Controller;
