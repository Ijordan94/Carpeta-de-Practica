const vehicleService = require("../services/vehicleService");
module.exports = {
getAllVehicles: async (req,res) => {try {
    const vehicles = await vehicleService.getVehicles();
    res.status(200).json(vehicles)
} catch (error) {
        res.status(503).json({
            error:"Can't find vehicles"
        })
    
}},

createVehicle: async (req,res) => {try {
    const {patente,marca} = req.body;
    const newVehicle = await vehicleService.createVehicle({patente,marca})
    res.status(200).json(newVehicle);
} catch (error) {
    res.status(503).json({
        error: "Can't create car"
    })
}
    
}
}