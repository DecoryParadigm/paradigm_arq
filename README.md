# Paradigm Arq 
Capturing the interest of prospects in an intereactive way.

## Description 
We've built this aquistion platform to assist representitives 
where-ever they go. To aquire information from those show interest
in paradigm's products, catalogs or becoming a dealer. 

By a click of a button you can have a native
experience as we've constructed this application as a progressive
web app. 


## Installatiom
To install this application on your device is simple. When browsing 
the application on you device you you will be prompted by your browser
to download the application to your device. It's that simple. 

## Support 
For support send an email to dharbert@paradigm.com or rzaza@paradigm.com

## Contributors
This is a pradigm application buiild, ideated and design by Zoltan Balla, 
Reda Zaza, Mubashir Andrabi, Decory Herbert.

## Database Schemas
``` json
{
_Prospect_DB_Schema: { 
"Id": "INT AUTO_INCREMENT PK",
"Interest": “STRING”,
"Firstname": “STRING”,
"Lastname": “STRING”, 
"Company": “STRING”, 
"Region": “STRING”,
"Email": “STRING”, 
"Phone_number": “INT”,
"Notes": “STRING”, 
"Submission_date": “DATE”, 
"Time_of_preferred_Contact": “DATE/STRING”
},


_Options_DB_Schema{
"Id": "INT AUTO_INCREMENT PK", 
"Full_name": "STRING", 
"Region_Id": "STRING",
"Email": "STRING", 
"State": "STRING"
}

}
```

## API Endpoints
```json
{
Request_method: “GET”
Endpoint: “/fields”
Request_body_model: { field_id: “id” }
Response_object_model: fields: { Dynamic_response }, 200

Request_method: “GET”
Endpoint: “/request_rep”
Response_object_model: rep: { Full_name:str, Region_id:str, Email:str, State:str  }, 200

Request_method: “POST”
Endpoint: “/prospect_submission”
Response_object_model: status: { code: 200 }

}
```
