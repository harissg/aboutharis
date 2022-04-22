﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PersonalSite.Context;

namespace PersonalSite.Migrations
{
 [DbContext(typeof(BlogsContext))]
 [Migration('20200522235917_added-isapproved-column')]
 partial class addedisapprovedcolumn
 {
  protected override void BuildTargetModel(ModelBuilder modelBuilder)
  {
#pragma warning disable 612, 618
modelBuilder
 .HasAnnotation('ProductVersion', '3.1.3')
 .HasAnnotation('Relational:MaxIdentifierLength', 128)
 .HasAnnotation('SqlServer:ValueGenerationStrategy', SqlServerValueGenerationStrategy.IdentityColumn);

modelBuilder.Entity('PersonalSite.Context.Author', b =>
 {
  b.Property<Guid>('AuthorId')
.ValueGeneratedOnAdd()
.HasColumnType('uniqueidentifier');

  b.Property<string>('Name')
.HasColumnType('nvarchar(max)');

  b.Property<Guid>('UserId')
.HasColumnType('uniqueidentifier');

  b.HasKey('AuthorId');

  b.HasIndex('UserId');

  b.ToTable('Author');
 });

modelBuilder.Entity('PersonalSite.Context.Blog', b =>
 {
  b.Property<Guid>('BlogId')
.ValueGeneratedOnAdd()
.HasColumnType('uniqueidentifier');

  b.Property<Guid>('AuthorId')
.HasColumnType('uniqueidentifier');

  b.Property<DateTime>('CreatedOn')
.HasColumnType('datetime2');

  b.Property<string>('Name')
.HasColumnType('nvarchar(max)');

  b.HasKey('BlogId');

  b.HasIndex('AuthorId');

  b.ToTable('Blog');
 });

modelBuilder.Entity('PersonalSite.Context.Comment', b =>
 {
  b.Property<Guid>('CommentId')
.ValueGeneratedOnAdd()
.HasColumnType('uniqueidentifier');

  b.Property<string>('AuthorName')
.HasColumnType('nvarchar(max)');

  b.Property<string>('Content')
.HasColumnType('nvarchar(max)');

  b.Property<DateTime>('CreatedOn')
.HasColumnType('datetime2');

  b.Property<string>('Email')
.HasColumnType('nvarchar(max)');

  b.Property<bool>('IsApproved')
.HasColumnType('bit');

  b.Property<Guid>('PostId')
.HasColumnType('uniqueidentifier');

  b.HasKey('CommentId');

  b.HasIndex('PostId');

  b.ToTable('Comment');
 });

modelBuilder.Entity('PersonalSite.Context.Post', b =>
 {
  b.Property<Guid>('PostId')
.ValueGeneratedOnAdd()
.HasColumnType('uniqueidentifier');

  b.Property<Guid>('BlogId')
.HasColumnType('uniqueidentifier');

  b.Property<string>('Content')
.HasColumnType('nvarchar(max)');

  b.Property<DateTime>('Createdon')
.HasColumnType('datetime2');

  b.Property<string>('Title')
.HasColumnType('nvarchar(max)');

  b.HasKey('PostId');

  b.HasIndex('BlogId');

  b.ToTable('Post');
 });

modelBuilder.Entity('PersonalSite.Context.User', b =>
 {
  b.Property<Guid>('UserId')
.ValueGeneratedOnAdd()
.HasColumnType('uniqueidentifier');

  b.Property<string>('Password')
.HasColumnType('nvarchar(max)');

  b.Property<string>('Username')
.HasColumnType('nvarchar(max)');

  b.HasKey('UserId');

  b.ToTable('User');
 });

modelBuilder.Entity('PersonalSite.Context.Author', b =>
 {
  b.HasOne('PersonalSite.Context.User', 'User')
.WithMany()
.HasForeignKey('UserId')
.OnDelete(DeleteBehavior.Cascade)
.IsRequired();
 });

modelBuilder.Entity('PersonalSite.Context.Blog', b =>
 {
  b.HasOne('PersonalSite.Context.Author', 'Author')
.WithMany()
.HasForeignKey('AuthorId')
.OnDelete(DeleteBehavior.Cascade)
.IsRequired();
 });

modelBuilder.Entity('PersonalSite.Context.Comment', b =>
 {
  b.HasOne('PersonalSite.Context.Post', 'Post')
.WithMany('Comments')
.HasForeignKey('PostId')
.OnDelete(DeleteBehavior.Cascade)
.IsRequired();
 });

modelBuilder.Entity('PersonalSite.Context.Post', b =>
 {
  b.HasOne('PersonalSite.Context.Blog', 'Blog')
.WithMany('Posts')
.HasForeignKey('BlogId')
.OnDelete(DeleteBehavior.Cascade)
.IsRequired();
 });
#pragma warning restore 612, 618
  }
 }
}
