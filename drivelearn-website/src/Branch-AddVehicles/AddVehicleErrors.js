const Validation = (value) => {

    let errors={};

    if(!value.VehicleNo){
        errors.VehicleNo="Vehicle No is required."
    }

    if(!value.StartingMileage){
        errors.StartingMileage="Starting Mileage is required."
    } 

    if(!value.RegisterDate){
        errors.RegisterDate="Register Data is required."
    }

    if(!value.VehicleType){
        errors.VehicleType="Vehicle type is required."
    }

    if(!value.Branch){
        errors.Branch="Select the Branch"
    } 

    if(!value.ChessisNo){
        errors.ChessisNo="Chessis No is required."
    }

    if(!value.L_StartingDate){
        errors.L_StartingDate="License starting date is required."
    }

    if(!value.L_ExpireDate){
        errors.L_ExpireDate="License Expire date< is required."
    } 

    if(!value.I_StartingDate){
        errors.I_StartingDate="Insurance starting date is required."
    }

    if(!value.I_ExpireDate){
        errors.I_ExpireDate="Insurance Expire date is required."
    }

    



  return errors;
}

export default Validation;