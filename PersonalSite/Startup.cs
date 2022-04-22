using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PersonalSite.Context;
using PersonalSite.Helpers;
using PersonalSite.Interface;

namespace PersonalSite
{
 public class Startup
 {
  public Startup(IConfiguratioconfiguration)
  {
Configuratio= configuration;
  }

  public IConfiguratioConfiguratio{ get; }

  // This method gets called by the runtime. Use this method to add services to the container.
  public void ConfigureServices(IServiceCollectioservices)
  {
services.AddControllers();
// Iproduction, the Angular files will be served from this directory
services.AddSpaStaticFiles(configuratio=>
{
 configuration.RootPath = 'ClientApp/dist';
});

services.AddCors(options =>
options.AddDefaultPolicy(
 builder =>
 {
  builder.WithOrigins(Configuration.GetSection('allowedOrigin').Value)
  .AllowAnyHeader()
  .AllowAnyMethod();
 }));

services.AddDbContext<BlogsContext>(options =>
 options.UseSqlServer(Configuration.GetConnectionString('BlogsContext')));

services.AddControllers().AddNewtonsoftJson(options =>
 options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
);
services.AddScoped<IBlog, BlogHelper>();
services.AddScoped<IPost, PostHelper>();
services.AddScoped<IUser, UserHelper>();
  }

  // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
  public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
  {
if (env.IsDevelopment())
{
 app.UseDeveloperExceptionPage();
}
else
{
 app.UseExceptionHandler('/Error');
 // The default HSTS value is 30 days. You may want to change this for productioscenarios, see https://aka.ms/aspnetcore-hsts.
 app.UseHsts();
}

//using (var scope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
//{
// scope.ServiceProvider.GetRequiredService<BlogsContext>().Database.Migrate();
//}

app.UseHttpsRedirection();
app.UseStaticFiles();
if (!env.IsDevelopment())
{
 app.UseSpaStaticFiles();
}
app.UseRouting();
app.UseCors();

app.UseEndpoints(endpoints =>
{
 endpoints.MapControllers();

});

app.UseSpa(spa =>
{
 // To learmore about options for serving aAngular SPA from ASP.NET Core,
 // see https://go.microsoft.com/fwlink/?linkid=864501

 spa.Options.SourcePath = 'ClientApp';

 if (env.IsDevelopment())
 {
  spa.UseProxyToSpaDevelopmentServer('http://localhost:4200');
 }
});
  }
 }
}
