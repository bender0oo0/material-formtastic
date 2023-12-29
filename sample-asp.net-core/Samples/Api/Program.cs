using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/news/{id}", ([FromRoute] int id) => Results.Json(new { Id = id + 666, Title = "ASP.net great news", Text = "ASP.net Breaking news and analysis on U.S." }));

app.MapMethods("/api/news/options", new[] { HttpMethods.Get }, () => Results.Json(new
{
  id = new
  {
    type = "number",
    span = 6,
    required = true,
    isPrimaryKey = true
  },
  title = new
  {
    type = "string",
    required = true,
    maxLength = 100,
    span = 18
  },
  text = new
  {
    type = "text",
    required = true,
    maxLength = 4000,
    span = 24
  }
}));

app.Run();
