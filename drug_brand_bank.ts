const brandDrugs :{
    name:string;
    form: "TABLET" | "CAPSULE" | "SYRUP" | "IV" | "IM" | "GUTT" | "SUPP" | "SPRAY" | "CREAM" | "PESS" | "DROPS" | "OCC" | "SUSP",
    route:"ORAL"|"INJECTION"|"SUBLINGUAL AND BUCCAL"|"RECTAL"|"OCULAR"|"OTIC"|"NASAL"|"NEBULIZATION"|"CUTANEOUS"|"INHALATION";
    dose:{
        value:number;
        unit:"ml"|'mg'|'g'|'oz'|'%'
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
    },
    {
        name: "Aceclofenac",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZOMAX TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZYLUM SUSP",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 200,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIWOK CAPS 500MG",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 500,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIWOK 250MG TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZITHROMYCIN 500MG UK",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 500,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZITHROMYCIN 500MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 500,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZITHROMYCIN 250MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZITEX SUSP 200MG",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIRON SUSPENSION",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIRON SUSPENSION",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIRON CAPS 250MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIROCIN CAPS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIMOX TABLETS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIMAX 250MG AZITHROMYCIN CAPS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZILEX 250MG CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZILEX 200MG/5MG SUSP",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 200,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIFAST 500MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 500,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIFAST 250MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZIBEST TABS 250MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AZEE (AZITHROMYCIN )250MG",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AXACEF TABS 250MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AXACEF SUSP 125MG",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 125,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AXACEF 500MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 500,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AVOMINE TABLETS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 25,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AVOMINE TAB UK",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 25,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AVOMAC (PROMETHAZINE )TABS 25MG",
        form: "SYRUP",
        route: "RECTAL",
        dose: {
            value: 25,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AVELON 400MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 400,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AVAMYS NASAL SPRAY 7.5MCG",
        form: "SPRAY",
        route: "NASAL",
        dose: {
            value: 400,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AUNTY MARY GRIPE WATER",
        form: "SPRAY",
        route: "NASAL",
        dose: {
            value: 400,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AUGMENTIN TAB 625MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 625,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AUGMENTIN SUSPENSION(457ML/70ML)",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 457,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "AUGMENTIN SUSP 228MG",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 228,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AUGMENTIN 1GM",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 1,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    // {
    //     name: "ATWOODS BITTERS",
    //     form: "TABLET",
    //     route: "ORAL",
    //     dose: {
    //         value: 1,
    //         unit: "mg"
    //     },
    //     validity: false,
    //     mech_of_action: "",
    //     generic_name: "",
    //     side_effects: [],
    //     contraIndications: [],
    //     is_prescription: false,
    //     off_label_use: "",
    //     lastUpdated: undefined,
    //     drug_information:'',
    //     common_name:''
    // },
    {
        name: "ATROPINE EYE DROP",
        form: "DROPS",
        route: "OCULAR",
        dose: {
            value: 1,
            unit: "&"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATORVASTATIN 20MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 20,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATORVASTATIN 10MG (ATOSTIN)",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 10,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATORVASTATIN 10MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 10,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATIVAN 2MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 2,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATIVAN 1MG TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 1,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATENOLOL TABS 50MG M'REICH",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 50,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATENOLOL TAB 25MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 50,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATENOLOL 50MG 28'S",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 50,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATENOLOL 100MG UK",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATENOLOL 100MG UK",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATACAND TABS 8MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 8,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATACAND TABS 16MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 16,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATACAND PLUS TABS 16/12.5",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 16,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATACAND PLUS 32/25",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 32,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATACAND 32/12.5MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 32,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ATACAND 32",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 32,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ASTYMIN SYS 200ML",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ASTYMIN FORTE CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ASTYMIN C DROPS",
        form: "DROPS",
        route: "ORAL",
        dose: {
            value: 15,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ASTYFER SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ASTYFER CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 30,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ASTHALEX SYR 100ML",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ASPIRIN TABS 300MG UK",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 300,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ASPIRIN CARDIO 100MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ASPIRIN BLISTER(AYRTON)",
        form: "IV",
        route: "INJECTION",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ASMADRIN",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ASCORDYL SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ARZIGLOBIN SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTRIFAN 20/120MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 20,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTHROTEC TAB 75MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 75,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTHROTEC 50MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 50,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTHROSAMINE PLUS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 60,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTESUNATE(GLUNATE)INJ.30MG",
        form: "IV",
        route: "INJECTION",
        dose: {
            value: 30,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTESUNATE INJ. 60MG",
        form: "IV",
        route: "INJECTION",
        dose: {
            value: 60,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTESUNATE AMODAQUIN-ADULT",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTEFAN TB 20/120 24S",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 20,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTEFAN SUSP. 60ML",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 60,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTEFAN ORIGINAL",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 60,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTEFAN 6S",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 60,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTEFAN 18S",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 60,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARTEFAN 12S",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 60,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARSUMOD PEDIATRIC SUSP",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 50,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARIMIDEX 1MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 1,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ARCALION 200MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 200,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AQUATABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 67,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "APTIZOOM SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "APROVASC 300/10MG TAB",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 300,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "APFLU SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "APETIT SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "APETAMIN SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "APETAMIN SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "APDYL-H COUGH SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "APDYL-H COUGH B/S",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "APC 4S BLISTERS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 400,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "APC 4S BLISTERS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 500,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ANUSOL UK SUPP",
        form: "SUPP",
        route: "RECTAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ANUSOL OINT.",
        form: "SUPP",
        route: "RECTAL",
        dose: {
            value: 2.5,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ANTI-ITCH CREAM",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 2,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ANTIFUNGAL CREAM DR SHEFFIELS",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 1,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ANTIFUNGAL CREAM DR SHEFFIELS",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 1,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ANTICID PLUS TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 240,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ANTICID PLUS SUSP",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 240,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ANTHISAN CREAM",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 2,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ANOPIL OINTMENT",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 2.5,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ANOMEX SUPP",
        form: "SUPP",
        route: "RECTAL",
        dose: {
            value: 200,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ANAFRANIL 25MG 84'S",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 25,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "A-MYCIN (AZITHROMYCIN) SUSP",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 200,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "A-MYCIN (AZITHROMYCIN) SUSP",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 10,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "A-MYCIN (AZITHROMYCIN) SUSP",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMPICILLIN 250MG TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXYLEX 250MG CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXYL SUSP 250MG/5ML UK",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXYL SUSP 125MG/5ML UK",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 125,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXYL CAPS 250MG 21'S",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXYL  500MG CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 500,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXYCILLIN 500MG 15'S",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 500,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXYCILLIN 125MG/5ML SUSP.",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 125,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXIL 125MG SUSP 100ML",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 125,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXICILLIN SYR LUEX",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXICILLIN SUSP 100ML-LOCAL",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOXICILLIN 500MG 21S  UK GENERIC",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 250,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOQ SYR ( AMODIAQUINE )",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 50,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOKSIKLAV SUSP 457MG",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 457,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOKSIKLAV SUSP 228MG",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 228,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOKSIKLAV INJ (TROGE) 600MG",
        form: "IV",
        route: "INJECTION",
        dose: {
            value: 600,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOKSIKLAV 625MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 625,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMOKSIKLAV 1G",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMMENS POWDER",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 11,
            unit: "oz"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMLONOVA 5MG TAB",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 5,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMLONOVA 10MG TAB",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 10,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMLODIPINE 5MG UK TEVA",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 5,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMLODIPINE 10MG UK TEVA",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 10,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMLO DENK 5MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 5,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMLO DENK 10MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 10,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMITRIPTYLINE 50MG TABS UK",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 50,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMITRIPTYLINE 25MG TABS UK",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 25,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMINOPLUS 200ML",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "AMINOPEP FORTE (2OOML)",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "AMEDIN 5MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 5,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "AMEDIN 10MG (AMLODIPINE)",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 10,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMBROLITE-GS",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 30,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMARYL 4MG TABLETS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 4,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMARYL 2MG TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 2,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMARYL 1MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 1,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMADAY 5MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 5,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AMADAY- 10MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 10,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALVITE SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ALVITE CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ALUDROX TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 840,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALPHA GARLIC CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 960,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALPHA  FOLIC ACID TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 400,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALPHA  FOLIC ACID TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 400,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALLOPURINOL 300MG 28'S",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 300,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALLOPURINOL 100MG UK",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALLERGY RELIEF",
        form: "SPRAY",
        route: "NASAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALLERGY RELIEF",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 4,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALLERGY RELIEF",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ALLERGEX SUSP",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ALLERGEX SUSP",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ALKA-5 SYRUP 100ML",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ALKA SELTZER",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 200,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALDOMET ORIGINAL",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALBENDAZOLE(ALBEN)",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 15,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALBENAZ TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 15,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALBENAZ SUSP",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 15,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALBEN SUSP",
        form: "SUSP",
        route: "ORAL",
        dose: {
            value: 200,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALAXIN TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 40,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ALAXIN SUPP",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 250,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "A-L FORTE 6",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 160,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AFLACIN EYE DROP",
        form: "DROPS",
        route: "OCULAR",
        dose: {
            value: 400,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AERIUS TABS 5MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 5,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "AERIUS SYRUP",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 2.5,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ADVIL SACHETS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 200,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ADVANTAN CREAM",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 0.1,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ADUTWUMWAA BITTERS SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 330,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ADOM W&G SYRUP",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 750,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ADOM LADIES",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 500,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ADOM KOO SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 350,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ADOM KOO CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 240,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ADOM GENTLEMEN CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 240,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ADOM  W&G  CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 240,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ADDITIVA VITAMIN C (LEMON)",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 1000,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ADDITIVA VITAMIN C (LEMON)",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 5,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTOPHLEM COUGH SYRUP",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTOPHLEM COUGH 100MG",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 100,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTINAC 100MG",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTIFEDTAB",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 60,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTIFED WET COUGH & COLD",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTIFED TABS (MULTI ACTION)",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 2.5,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTIFED SYR (MULTI ACTION)",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTIFED SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTIFED MULTI-ACTION DRY SYR",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTIFED COMPOUND LINCTUSE",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 240,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTIFED COLD TAB",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 200,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACTIFED COLD SYRUP",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 200,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ACNEGON CREAM",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 1,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "A-CIP D EYE DROP",
        form: "DROPS",
        route: "OCULAR",
        dose: {
            value: 1,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACIDOM CAPS",
        form: "CAPSULE",
        route: "ORAL",
        dose: {
            value: 70,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACICLOVIR TABS UK (200MG)",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 200,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACICLOVIR CREAM S/S",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 1,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACICLOVIR CREAM GENERIC 10GM",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 5,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACICLOVIR CREAM 10G",
        form: "CREAM",
        route: "CUTANEOUS",
        dose: {
            value: 10,
            unit: "%"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACICLOVIR 400MG TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 400,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACETAL 100MG TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACECAL CALCIUM TABS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 500,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ACECA PLUS",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 240,
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
        drug_information:'',
        common_name:''
    },
    {
        name: "ACECA 100",
        form: "TABLET",
        route: "ORAL",
        dose: {
            value: 100,
            unit: "mg"
        },
        validity: false,
        mech_of_action: "",
        generic_name: "",
        side_effects: [],
        contraIndications: [],
        is_prescription: false,
        off_label_use: "",
        lastUpdated: undefined,
        drug_information:'',
        common_name:''
    },
    {
        name: "ABIDEC OMEGA-3 SYR.",
        form: "SYRUP",
        route: "ORAL",
        dose: {
            value: 150,
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
        drug_information:'',
        common_name:''
    },
]
