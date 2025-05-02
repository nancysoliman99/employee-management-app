frontend/: Angular 
backend/: ASP.NET Core Web API (with Entity Framework Core code frist & SQL Server)

//////////////////////////////////

How To Run :

backend must run frist : 
1- Open the backend folder in Visual Studio 
2-connection string must be correct in appsettings.json
3- Apply the migration to create the database
Open Tools > NuGet Package Manager > Package Manager console 
Run the following command.
 'Update-Database'
4-run the api project (it will run with swagger ui)

frontend :
1-make sure api is sitll running
2- install node_modules using command 'npm i' in terminal
3- run in terminal  'ng serve -o' to start angular server and open it 

