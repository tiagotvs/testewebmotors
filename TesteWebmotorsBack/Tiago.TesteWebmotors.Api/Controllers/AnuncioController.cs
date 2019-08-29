using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Tiago.TesteWebmotors.App.Interfaces;
using Tiago.TesteWebmotors.App.Models;

namespace Tiago.TesteWebmotors.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowMyOrigin")]
    public class AnuncioController : ControllerBase
    {
        private readonly IAnuncioWebmotors _anuncioWebmotors;
        private RequestResult<AnuncioWebMotorsModel> result;
        public AnuncioController(IAnuncioWebmotors anuncioWebmotors)
        {
            _anuncioWebmotors = anuncioWebmotors;
            result = new RequestResult<AnuncioWebMotorsModel>();
        }

        // GET api/values
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                result.ListEntities = _anuncioWebmotors.GetAll();
                result.Success = true;
                return Ok(result);
            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = ex.Message;

                return BadRequest(result);
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            try
            {
                result.Entity = _anuncioWebmotors.GetById(id);
                result.Success = true;

                return Ok(result);
            }
            catch (Exception ex)
            {
                result.Message = ex.Message;
                result.Success = false;
                return BadRequest(result);
            }
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] AnuncioWebMotorsModel model)
        {
            try
            {
                _anuncioWebmotors.Register(model);
                result.Message = "Usuário inserido com sucesso!";
                result.Success = true;

                return Ok(result);
            }
            catch (Exception ex)
            {
                result.Message = ex.Message;
                result.Success = false;
                return BadRequest(result);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult Put([FromBody] AnuncioWebMotorsModel model)
        {
            try
            {
                _anuncioWebmotors.Update(model);
                result.Message = "Usuário alterado com sucesso!";
                result.Success = true;

                return Ok(result);
            }
            catch (Exception ex)
            {
                result.Message = ex.Message;
                result.Success = false;
                return BadRequest(result);
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                _anuncioWebmotors.Remove(id);
                result.Success = true;

                return Ok(result);
            }
            catch (Exception ex)
            {
                result.Message = ex.Message;
                result.Success = false;
                return BadRequest(result);
            }
        }
    }
}
