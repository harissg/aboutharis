#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["PersonalSite/PersonalSite.csproj", "PersonalSite/"]
RUN dotnet restore "PersonalSite/PersonalSite.csproj"
COPY . .
WORKDIR "/src/PersonalSite"
RUN dotnet build "PersonalSite.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PersonalSite.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PersonalSite.dll"]