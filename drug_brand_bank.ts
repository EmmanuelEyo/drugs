const brandDrugs :{
    name:string;
    form: "TABLET" | "CAPSULE" | "SYRUP" | "IV" | "IM" | "GUTT" | "SUPP" | "SPRAY" | "CREAM" | "PESS" | "OCC" | "SUSP",
    route:"ORAL"|"INJECTION"|"SUBLINGUAL AND BUCCAL"|"RECTAL"|"OCULAR"|"OTIC"|"NASAL"|"NEBULIZATION"|"INHALATION";
    dose:{
        value:number;
        unit:"ml"|'mg'|'g'|'%'
    },
    validity:boolean;
    mech_of_action:string;
    generic_name:string;
    side_effects:string[];
    contraIndications:string[];
    is_prescription:boolean;
    off_label_use:string;
    lastUpdated:Date;
    drug_information:string

}[] = [
    {
        name: "ABIDEC DROPS",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 25,
            unit: "ml"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:''
    }
]