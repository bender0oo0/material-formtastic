using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/news/{id}", ([FromRoute] int id) => Results.Json(new News(id + 666, "ASP.net great news", "ASP.net Breaking news and analysis on U.S.")));
app.MapMethods("/api/news/options/{id?}", new[] { HttpMethods.Get }, ([FromRoute] int? id) => Results.Json(new
{
  id = new FieldDefinition("number", 3, true, IsPrimaryKey: true),
  title = new FieldDefinition("string", 9, MaxLength: 100),
  text = new FieldDefinition("text", 12, MaxLength: 4000)
}));

app.Run();

public record FieldDefinition(string Type, int Span, bool? Required = null, int? MaxLength = null, bool? IsPrimaryKey = null);
public record News(int Id, string Title, string Text);
