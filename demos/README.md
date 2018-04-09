# 课堂练习的操作指导

## 目录

- .NET 单元测试示例
  - [xUnit.NetCore](#xUnit.NetCore)
  - [MSTest](#MSTest)
  - [IntelliTest](#IntelliTest)

- python 单元测试示例
  - [pytest](#python-pytest-demo)

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

```xml
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

### Run MSTest using Visual Studio 2017

- Open your solution **./demos/MSTest-visual-studio-demo/Bank.sln** in Visual Studio.
- In the top menu, click Build -> Build Solution.
- In the top menu, click Test -> Windows -> Test Explorer.

### Run MSTest using Visual Studio Code

- In the TERMINAL window of the visual studio code

```bash
cd demos/MSTest-visual-studio-demo/BankTest
dotnet test
```

## IntelliTest

### Precondition

The **Create IntelliTest** and **Run IntelliTest** menu commands:

- Are available in only the Enterprise Edition of Visual Studio 2015 and later.

- Support only C# code that targets the .NET Framework.

### Instruction

Use IntelliTest to explore your code and generate unit tests:

- Open your solution **IntelliTestDemo.sln** in Visual Studio. Then open the class file that has methods you want to test.

- Right-click in a method in your code and choose **Run IntelliTest** to generate unit tests for the code in your method.

## python-pytest-demo

### Prerequisites

- Python 2.7+ or Python 3:

```sh
$ python --version
Python 2.7.1+
```

- pytest

To check if pytest is installed already:

```sh
$ pytest --version
This is pytest version 2.7.0, imported from /usr/lib/python2.7/site-packages/pytest.pyc

```

If not, then see [pytest](https://docs.pytest.org/en/latest/).
or use **pip install pytest** to install pytest if you already have pip installed.

### run the test

```sh
cd demos\python-pytest-demo
pytest
# python -m pytest #anoher way to run
pytest -h # show help on command line and config file options
pytest --junit-xml=report.xml #Run tests and view XML xUnit-style test report
```
