
#!/bin/bash
file_path=$(realpath $1)

supabase migration new geo

for file in ./supabase/migrations/*geo.sql ; do
  cp $file_path "$file"
done

supabase db reset
