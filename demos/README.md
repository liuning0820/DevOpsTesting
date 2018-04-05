# 课堂练习的操作指导

## 目录

- xUnit 单元测试示例
  - [xUnit.NetCore](#xUnit.NetCore)
  - [MSTest](#MSTest)
  - [Vue](#vue)

## xUnit.NetCore

### Download the .NET Core SDK

As of this writing, the .NET Core SDK is available for [download](https://www.microsoft.com/net/download/core) for Windows, Linux, and OS X. Once you've downloaded and installed the SDK, open a fresh command prompt of your choice (CMD, PowerShell, Bash, etc.) and make sure that you can access the CLI by typing dotnet --version. You should be rewarded with a single line, describing the version of the .NET Core SDK you have installed:

```bash
$ dotnet --version
2.0.0

```

### 操作步骤

（1）进入`demos/xunit-net-core-demo`目录，命令行执行下面的命令。

```bash
$ cd demos/xunit-net-core-demo
$ dotnet new classlib
```

（2）The result of this project template creates a .NET Standard class library. We actually want a .NET Core class library (since we're writing .NET Core tests), so open the generated .csproj file and edit it so that it looks like this:

```
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netcoreapp2.0</TargetFramework>
  </PropertyGroup>

    <ItemGroup>
    <PackageReference Include="xunit" Version="2.3.1" />
    <DotNetCliToolReference Include="dotnet-xunit" Version="2.3.1" />
  </ItemGroup>

</Project>

```



(3) 添加测试用例

编辑 Class1.cs

```cs

using System;
using Xunit;
namespace xunit_net_core_demo
{
    public class Class1
    {
         [Fact]
        public void PassingTest()
        {
            Assert.Equal(4, Add(2, 2));
        }

        [Fact]
        public void FailingTest()
        {
            Assert.Equal(5, Add(2, 2));
        }

        int Add(int x, int y)
        {
            return x + y;
        }
    }
}




```


(4) 执行测试

```
$ dotnet restore && dotnet xunit

```

## MSTest