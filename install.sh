
cd ~
git clone https://gitcode.net/mirrors/microsoft/vcpkg
cd vcpkg
 sh bootstrap-vcpkg.sh
 
 
 ~/vcpkg/vcpkg integrate install
  ~/vcpkg/vcpkg integrate bash
 ~/vcpkg/vcpkg install  cppunit
 
 
 ~/vcpkg/vcpkg install  gtest
cd ~
sudo apt install -y libcppunit-dev
cd ~
git clone https://github.com/google/googletest
cd googletest
mkdir build
cd build
cmake ..
make -j8
sudo make install
cd ~
mkdir cppmodules
cd cppmodules
wget  -v  --output-document=leetcode-treenode-cpp.zip https://github.com/masx200/leetcode-treenode-cpp/archive/refs/tags/1.1.2.zip
unzip leetcode-treenode-cpp.zip
