using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tiago.TesteWebmotors.Domain.Interfaces;
using Tiago.TesteWebmotors.Data.Contexto;
using Microsoft.EntityFrameworkCore;

namespace Tiago.TesteWebmotors.Data.Repository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly Context Db;
        protected readonly DbSet<TEntity> DbSet;

        public Repository(Context context)
        {
            Db = context;
            DbSet = Db.Set<TEntity>();
        }

        public virtual void Add(TEntity obj)
        {
            DbSet.Add(obj);
            SaveChanges();
        }

        public virtual TEntity GetById(int id)
        {
            return DbSet.Find(id);
        }

        public virtual IQueryable<TEntity> GetAll()
        {
            return DbSet;
        }

        public virtual void Update(TEntity obj)
        {
            DbSet.Attach(obj).State = EntityState.Modified;
            SaveChanges();
        }

        public virtual void Remove(int id)
        {
            DbSet.Remove(DbSet.Find(id));
            SaveChanges();
        }

        public int SaveChanges()
        {
            return Db.SaveChanges();
        }

        public void Dispose()
        {
            Db.Dispose();
            GC.SuppressFinalize(this);
        }

        IQueryable<TEntity> IRepository<TEntity>.GetAll()
        {
            return DbSet;
        }
    }
}
