add_rules("mode.debug", "mode.release")

target("ransom-note")
set_kind("static")
add_files("index.ixx")
