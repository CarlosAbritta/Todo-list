const logMiddleware = (req,res,next)=>{
    console.log(`[${new Date().toLocaleTimeString()}] Pedido recebido: ${req.method} ${req.path}`)
    next()
}

module.exports = logMiddleware