using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using System;
using Tiago.TesteWebmotors.App.Interfaces;
using Tiago.TesteWebmotors.App.Services;
using Tiago.TesteWebmotors.Data.Contexto;
using Tiago.TesteWebmotors.Data.Repository;
using Tiago.TesteWebmotors.Domain.Interfaces;

namespace Tiago.TesteWebmotors.Ioc
{
    public class NativeInjectorBootStrapper
    {
        public static void RegisterServices(IServiceCollection services)
        {
            //Application
            //services.AddSingleton(Mapper.Configuration);
            //services.AddScoped<IMapper>(sp => new Mapper(sp.GetRequiredService<IConfigurationProvider>(), sp.GetService));
            services.AddScoped<IAnuncioWebmotors, AnuncioWebmotors>();


            //Data
            services.AddScoped<IAnuncioWebMotorsRepository, AnuncioWebMotorsRepository>();


            services.AddScoped<Context>();

        }
    }
}
