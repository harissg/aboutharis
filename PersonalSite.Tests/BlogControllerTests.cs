using NUnit.Framework;
using Moq;
using PersonalSite.Interface;
using PersonalSite.ViewModels;
using FluentAssertions;

namespace PersonalSite.Tests
{
 public class Tests
 {
  private BlogViewModel _blogModel = new BlogViewModel();

  [Test]
  public void GET_BLOG()
  {
// arrange
var mock = new Mock<IBlog>();
mock.Setup(b => b.Get()).Returns(_blogModel);
var controller = new BlogsController(mock.Object);

// act
var result = controller.Get();

result.Should().NotBeNull();
  }
 }
}