const { Usuario } = require('../models')
const jwt = require('jsonwebtoken')

// exports.verifyTokenPage = (req, res) => {
//     const token = req.body.token || req.query.token || req.get('Authorization')
  
//     // Verificar el token
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         console.log(token)
//         console.error('Error al verificar el token:', err);
//         return res.status(400).send('Token no válido');
//       }
      
//       //res.status(200);
//       //res.json(token);

//       res.status(200).json({ token });

//     });
    
// };


exports.createNewUserPassword = async (req, res) => {
  const usuarioId = req.user;
  let body = req.body
  if (body) {
    body.password = await Usuario.hashPassword(body.password)
  }

  await Usuario.findOneAndUpdate({_id: usuarioId}, {password : body.password}, function (err, place) {
    console.log(usuarioId)
    if (err) {
      res.status(500).json({ error: err })
    }
  })
  
  res.status(201).json({ result: 'Actualizado correctamente' })
    
};



// exports.verifyTokenPage = async (req, res) => {
//   const token = req.body.token || req.query.token || req.get('Authorization');

//   // Verificar el token
//   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
//     if (err) {
//       console.error('Error al verificar el token:', err);
//       return res.status(400).send('Token no válido');
//     }

//     // Si el token es valido, procede a cambiar la contraseña
//     const usuarioId = req.user;
//     let body = req.body;

//     if (body) {
//       body.password = await Usuario.hashPassword(body.password);
//     }

//     await Usuario.findOneAndUpdate(
//       { _id: usuarioId },
//       { password: body.password },
//       function (err, place) {
//         if (err) {
//           console.error('Error al actualizar la contraseña:', err);
//           return res.status(500).json({ error: err });
//         }
//       }
//     );

//     res.status(201).json({ result: 'Contraseña actualizada correctamente' });
//   });
// };