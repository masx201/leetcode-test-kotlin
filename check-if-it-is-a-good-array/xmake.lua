add_requires("vcpkg::gtest")
set_languages("c17", "cxx20")
target("test")
set_kind("binary")
add_files("index.ixx")
add_files("test.cpp")
add_packages("vcpkg::gtest")
set_group("test")
set_default(false)
target_end()

